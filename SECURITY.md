# Configuración de Seguridad

Este documento describe las medidas de seguridad implementadas en el formulario de contacto.

## Protecciones Implementadas

### 1. Honeypot Field
- Campo invisible `website` que solo los bots llenan
- Si el campo tiene contenido, el formulario muestra un falso éxito pero no envía el email
- Los usuarios humanos nunca ven ni llenan este campo

### 2. Rate Limiting (Cliente)
- Límite de 1 mensaje cada 60 segundos por usuario
- Usa `localStorage` para rastrear el último envío
- Muestra mensaje amigable al usuario si intenta enviar antes de tiempo
- **Limitación:** Se puede bypassear limpiando localStorage

### 3. EmailJS Domain Allowlist (Requerido)
Configura esto en el dashboard de EmailJS para protección a nivel de servidor:

#### Para producción con dominio personalizado:
```
pablospennato.dev
www.pablospennato.dev
```

#### Durante desarrollo/testing (temporal):
```
pablospennato.dev
www.pablospennato.dev
*.vercel.app
localhost
```

**⚠️ IMPORTANTE:** Una vez en producción, elimina `localhost` y `*.vercel.app` de la lista permitida.

## Cómo Configurar EmailJS Domain Allowlist

1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/admin/account)
2. Busca la sección **"Security"** o **"Allowed Origins"**
3. Agrega los dominios permitidos (ver arriba)
4. Guarda los cambios

## Protecciones Adicionales Recomendadas

### Para mayor seguridad (opcional):

#### Cloudflare Turnstile (CAPTCHA invisible)
- Protección contra bots sofisticados
- Mejor UX que reCAPTCHA
- Gratis con cuenta Cloudflare
- Requiere configuración adicional

#### Vercel Edge Middleware
- Rate limiting a nivel de servidor (IP-based)
- Bloquea requests antes de procesar
- Más difícil de bypassear que localStorage
- Requiere configuración de middleware

## Monitoreo

### Revisar logs de EmailJS
- Verifica intentos de envío inusuales
- Revisa el dashboard de EmailJS regularmente
- Configura alertas si es posible

### Indicadores de ataque:
- Múltiples envíos desde la misma IP en corto tiempo
- Mensajes con contenido idéntico o spam
- Envíos desde dominios no autorizados (si no configuraste allowlist)

## Limitaciones Actuales

- **Rate limiting en cliente:** Puede bypassearse limpiando localStorage o usando modo incógnito
- **Honeypot:** Solo detiene bots simples, bots sofisticados pueden detectarlo
- **EmailJS keys públicas:** Son visibles en el código, por eso el domain allowlist es crítico

## Próximos Pasos (si es necesario)

Si experimentas spam o ataques:
1. Implementar Cloudflare Turnstile
2. Agregar rate limiting con Vercel Edge Middleware
3. Considerar backend serverless con validación adicional
