export type ThemePreference = 'light' | 'dark' | 'system';

type ThemeToggleState = {
  mediaListener?: (event: MediaQueryListEvent) => void;
  outsideClickHandler?: (event: MouseEvent) => void;
  afterSwapHandler?: () => void;
};

const getThemePreference = (): ThemePreference => {
  try {
    return (localStorage.getItem('theme') as ThemePreference) || 'system';
  } catch {
    return 'system';
  }
};

const updateIcons = (container: HTMLElement, pref: ThemePreference) => {
  container.querySelectorAll<HTMLElement>('[data-theme-icon]').forEach((icon) => {
    icon.style.scale = icon.dataset.themeIcon === pref ? '1' : '0';
  });

  container.querySelectorAll<HTMLElement>('.themes-menu-option').forEach((option) => {
    option.classList.toggle('active', option.dataset.themeOption === pref);
  });
};

const closeMenus = (menus: HTMLElement[]) => {
  menus.forEach((menu) => {
    menu.classList.add('hidden');
    menu.classList.remove('open');
  });
};

const registerClickHandler = (element: Element, handler: EventListener, key: string) => {
  const node = element as HTMLElement & { [k: string]: EventListener | undefined };
  if (node[key]) {
    node.removeEventListener('click', node[key]!);
  }
  node[key] = handler;
  node.addEventListener('click', handler);
};

export const initThemeToggleSystem = () => {
  if (typeof window === 'undefined') return;

  const state: ThemeToggleState = (window as any).__themeToggleState || ((window as any).__themeToggleState = {});
  const containers = Array.from(document.querySelectorAll<HTMLElement>('[data-theme-toggle]'));
  if (!containers.length) return;

  const menus = containers
    .map((container) => container.querySelector<HTMLElement>('[data-theme-menu]'))
    .filter((menu): menu is HTMLElement => Boolean(menu));

  const media = window.matchMedia('(prefers-color-scheme: dark)');

  if (state.mediaListener) {
    media.removeEventListener('change', state.mediaListener);
  }

  const applyTheme = (pref?: ThemePreference) => {
    const preference = pref ?? getThemePreference();
    const isDark = preference === 'dark' || (preference === 'system' && media.matches);

    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.dataset.theme = preference;

    containers.forEach((container) => updateIcons(container, preference));
    return preference;
  };

  const mediaListener = () => applyTheme();
  media.addEventListener('change', mediaListener);
  state.mediaListener = mediaListener;

  if (state.outsideClickHandler) {
    document.removeEventListener('click', state.outsideClickHandler);
  }

  const outsideClickHandler = (event: MouseEvent) => {
    if (containers.some((container) => container.contains(event.target as Node))) return;
    closeMenus(menus);
  };

  document.addEventListener('click', outsideClickHandler);
  state.outsideClickHandler = outsideClickHandler;

  containers.forEach((container) => {
    const menu = container.querySelector<HTMLElement>('[data-theme-menu]');
    const toggleBtn = container.querySelector<HTMLElement>('[data-theme-toggle-btn]');

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

    menu.querySelectorAll<HTMLElement>('.themes-menu-option').forEach((option) => {
      const pref = (option.dataset.themeOption as ThemePreference) || 'system';
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
