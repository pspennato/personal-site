# Configuración de EmailJS

Este proyecto usa EmailJS para el formulario de contacto. Sigue estos pasos para configurarlo:

## Pasos para configurar EmailJS

### 1. Crear una cuenta en EmailJS
- Visita [https://www.emailjs.com/](https://www.emailjs.com/)
- Regístrate gratis (hasta 200 emails/mes)

### 2. Agregar un servicio de email
- Ve a [Email Services](https://dashboard.emailjs.com/admin)
- Haz clic en "Add New Service"
- Selecciona tu proveedor de email (Gmail, Outlook, etc.)
- Conecta tu cuenta
- Copia el **Service ID**

### 3. Crear un template de email
- Ve a [Email Templates](https://dashboard.emailjs.com/admin/templates)
- Haz clic en "Create New Template"
- Usa este template:

```
Subject: Nuevo mensaje de {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}
```

- Guarda el template y copia el **Template ID**

### 4. Obtener tu Public Key
- Ve a [Account](https://dashboard.emailjs.com/admin/account)
- Copia tu **Public Key**

### 5. Configurar variables de entorno localmente

1. Copia el archivo `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edita `.env.local` y reemplaza con tus valores:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx
   ```

3. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### 6. Configurar variables de entorno en Vercel

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Ve a Settings > Environment Variables
3. Agrega las tres variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Haz un nuevo deploy o espera al próximo deploy automático

## Verificación

Una vez configurado, el formulario de contacto debería funcionar. Los mensajes llegarán al email configurado en EmailJS.

## Notas de Seguridad

- Las variables `NEXT_PUBLIC_*` son accesibles en el cliente (navegador)
- La Public Key de EmailJS está diseñada para ser pública
- Puedes limitar el uso por dominio en el dashboard de EmailJS para evitar spam
