# De Volón Pimpón · Lotería del taco

Menú digital de De Volón Pimpón Taquería (Córdoba, Ver.): las cartas del menú como un mazo de lotería, en carrusel o todas a la vez ("Muéstrame todas"). Incluye botón de pedido por WhatsApp y botones de servicio en mesa (mesero, cuenta, WiFi, reseña).

Hecho con [Astro](https://astro.build), sin frameworks ni dependencias extra: una página, CSS y un poco de JS.

## Correr

Requiere Node ≥ 22.23 (ver `.nvmrc`) y pnpm.

```sh
pnpm install
pnpm dev        # desarrollo en http://localhost:4321
pnpm build      # sitio estático en dist/
pnpm preview    # sirve dist/ (usa --host para abrirlo desde el celular)
```

## Dónde se edita

- **Menú y precios:** `src/data/menu.ts`. Cada carta es un objeto del arreglo `cartas`; `cats` son las pestañas.
- **WhatsApp, WiFi y liga de reseña:** objeto `info` en el mismo archivo.
- **Página y estilos:** `src/pages/index.astro`.
- **Dibujos de la lotería:** `public/img/lot/` (SVG).

## Mesero y cuenta por mesa

Los botones "Pedir mesero" y "Pedir cuenta" mandan un WhatsApp con el número de mesa. Cada mesa lleva su QR apuntando a `https://<dominio>/?mesa=7`; si no viene la mesa, el sitio la pregunta.

## Pendiente

- Número de WhatsApp, datos del WiFi y liga directa de reseña de Google (hoy son de relleno).
- Confirmar precios: los comentarios en `menu.ts` marcan cuáles salen de la carta nueva y cuáles del menú anterior.
- Reemplazar los dibujos por los archivos originales del diseñador (los actuales se vectorizaron de fotos).
