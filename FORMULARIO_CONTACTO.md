# Configuración del Formulario de Contacto

El formulario de contacto utiliza **Formspree**, un servicio gratuito que permite procesar formularios sin necesidad de backend.

## 🔧 Configuración (5 minutos)

### 1. Crear cuenta en Formspree

1. Ve a [https://formspree.io/](https://formspree.io/)
2. Haz clic en **"Sign Up"** (Registrarse)
3. Usa tu email **jscamposx@gmail.com** para crear la cuenta
4. Confirma tu email

### 2. Crear un nuevo formulario

1. Una vez dentro de tu panel, haz clic en **"+ New Form"**
2. Dale un nombre, por ejemplo: **"Portafolio - Contacto"**
3. Formspree te dará un **Form ID** único, algo como: `xovqzkby`

### 3. Actualizar el código

Abre el archivo: `src/components/sections/Contact.astro`

Busca esta línea (aproximadamente línea 17):

```astro
action="https://formspree.io/f/xovqzkby"
```

Reemplaza `xovqzkby` con tu **Form ID** que obtuviste en el paso 2.

Ejemplo:
```astro
action="https://formspree.io/f/TU_FORM_ID_AQUI"
```

### 4. ¡Listo!

Guarda los cambios y prueba el formulario. El primer envío te pedirá confirmar tu email.

## ✨ Características del Formulario

- ✅ **Validación de campos** (nombre, email, asunto, mensaje)
- ✅ **Mensajes de estado** (éxito/error)
- ✅ **Diseño responsive** (móvil, tablet, desktop)
- ✅ **Protección anti-spam** (integrada en Formspree)
- ✅ **Email de confirmación** automático
- ✅ **Link alternativo** a tu email directo

## 📧 ¿Dónde llegan los mensajes?

Todos los mensajes enviados a través del formulario llegarán a tu email: **jscamposx@gmail.com**

## 🎨 Personalización

Si quieres cambiar los textos del formulario, edita estas variables en `Contact.astro`:

```astro
const eyebrow = 'Contacto';
const title = 'Hablemos de tu proyecto';
const description = 'Estoy disponible para nuevos proyectos...';
```

## 🆓 Plan Gratuito

El plan gratuito de Formspree incluye:
- ✅ 50 envíos por mes
- ✅ Protección anti-spam básica
- ✅ Notificaciones por email
- ✅ Sin marca de agua

Para más envíos, puedes actualizar a un plan pagado o usar otro servicio como:
- [Web3Forms](https://web3forms.com/)
- [EmailJS](https://www.emailjs.com/)
- [Basin](https://usebasin.com/)

## 🐛 Solución de Problemas

**El formulario no envía:**
- Verifica que el Form ID sea correcto
- Revisa la consola del navegador (F12) para errores
- Asegúrate de que tu cuenta de Formspree esté verificada

**No llegan los emails:**
- Revisa tu carpeta de spam
- Verifica que el email en Formspree sea el correcto
- Prueba enviando un mensaje de prueba desde el panel de Formspree
