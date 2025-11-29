const getThemePreference = () => {
  try {
    return localStorage.getItem('theme') || 'system';
  } catch {
    return 'system';
  }
};

const updateIcons = (container, pref) => {
  container.querySelectorAll('[data-theme-icon]').forEach((icon) => {
    icon.style.scale = icon.dataset.themeIcon === pref ? '1' : '0';
  });

  container.querySelectorAll('.themes-menu-option').forEach((option) => {
    option.classList.toggle('active', option.dataset.themeOption === pref);
  });
};

const closeMenus = (menus) => {
  menus.forEach((menu) => {
    menu.classList.add('hidden');
    menu.classList.remove('open');
  });
};

const registerClickHandler = (element, handler, key) => {
  const node = element;
  if (node[key]) {
    node.removeEventListener('click', node[key]);
  }
  node[key] = handler;
  node.addEventListener('click', handler);
};

export const initThemeToggleSystem = () => {
  if (typeof window === 'undefined') return;

  const state = window.__themeToggleState || (window.__themeToggleState = {});
  const containers = Array.from(document.querySelectorAll('[data-theme-toggle]'));
  if (!containers.length) return;

  const menus = containers
    .map((container) => container.querySelector('[data-theme-menu]'))
    .filter((menu) => Boolean(menu));

  const media = window.matchMedia('(prefers-color-scheme: dark)');

  if (state.mediaCleanup) {
    state.mediaCleanup();
  }

  const applyTheme = (pref) => {
    const preference = pref || getThemePreference();
    const isDark = preference === 'dark' || (preference === 'system' && media.matches);

    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
    document.documentElement.dataset.theme = preference;

    containers.forEach((container) => updateIcons(container, preference));
    return preference;
  };

  const mediaListener = () => applyTheme();

  const removeMediaListener = (() => {
    if ('addEventListener' in media) {
      media.addEventListener('change', mediaListener);
      return () => media.removeEventListener('change', mediaListener);
    }

    // Fallback para navegadores que usan addListener/removeListener
    media.addListener(mediaListener);
    return () => media.removeListener(mediaListener);
  })();

  state.mediaListener = mediaListener;
  state.mediaCleanup = removeMediaListener;

  if (state.outsideClickHandler) {
    document.removeEventListener('click', state.outsideClickHandler);
  }

  const outsideClickHandler = (event) => {
    if (containers.some((container) => container.contains(event.target))) return;
    closeMenus(menus);
  };

  document.addEventListener('click', outsideClickHandler);
  state.outsideClickHandler = outsideClickHandler;

  containers.forEach((container) => {
    const menu = container.querySelector('[data-theme-menu]');
    const toggleBtn = container.querySelector('[data-theme-toggle-btn]');

    if (!menu || !toggleBtn) return;

    registerClickHandler(
      toggleBtn,
      (event) => {
        event.stopPropagation();
        const opening = menu.classList.contains('hidden');
        closeMenus(menus);
        menu.classList.toggle('hidden');
        if (opening) menu.classList.add('open');
        else menu.classList.remove('open');
      },
      '__themeToggleBtnHandler'
    );

    menu.querySelectorAll('.themes-menu-option').forEach((option) => {
      const pref = option.dataset.themeOption || 'system';
      registerClickHandler(
        option,
        () => {
          try {
            localStorage.setItem('theme', pref);
          } catch {}
          applyTheme(pref);
          closeMenus(menus);
        },
        '__themeOptionHandler'
      );
    });
  });

  applyTheme();

  requestAnimationFrame(() => {
    document.documentElement.classList.remove('pre-theme');
    document.documentElement.classList.add('theme-transition');
    setTimeout(() => document.documentElement.classList.remove('theme-transition'), 1000);
  });

  if (!state.afterSwapHandler) {
    const afterSwapHandler = () => initThemeToggleSystem();
    document.addEventListener('astro:after-swap', afterSwapHandler);
    state.afterSwapHandler = afterSwapHandler;
  }
};

export default initThemeToggleSystem;
