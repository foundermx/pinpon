// Datos del negocio. TODO(cliente): confirmar WhatsApp, WiFi y liga de reseña.
export const info = {
  whatsapp: '520000000000', // 52 + 10 dígitos, sin espacios
  wifi: { red: 'PIMPON-INVITADOS', clave: 'contodo' },
  // ponytail: búsqueda en Maps; cambiar por la liga directa "writereview?placeid=..." cuando la tengan
  resena: 'https://www.google.com/maps/search/?api=1&query=De%20Vol%C3%B3n%20Pimp%C3%B3n%20Taquer%C3%ADa',
};

export const cats = [
  { id: 'tacos', label: 'Tacos' },
  { id: 'picar', label: "Pa' picar" },
  { id: 'tomar', label: "Pa' tomar" },
  { id: 'paletas', label: 'Paletas' },
];

type Item = { name: string; price?: number; note?: string };
type Group = { title?: string; items: Item[] };
export type Carta = {
  id: string; cat: string;
  num?: number; name?: string;   // carta de lotería de la marca: número arriba, nombre abajo
  art?: string[];                // dibujos en /public/img/lot
  kicker?: string; title?: string; script?: string; price?: number; love?: boolean;
  groups?: Group[]; foot?: string;
  frase?: string;                // carta de frase (HTML propio, confiable)
};

// El mazo, en el orden del aro de cartas del local (fotos 2026-11-07).
// ponytail: precios marcados "foto" se leyeron de la carta nueva; los "viejo" son del menú anterior y faltan confirmar.
export const cartas: Carta[] = [
  { id: 'galan', cat: 'tacos', num: 8, name: 'El galán', art: ['galan'] },
  { id: 'tacos', cat: 'tacos', title: 'Tacos, tacos', groups: [
    { items: [ // foto
      { name: 'Árabe', price: 60, note: 'Con queso + 10 pesitos' },
      { name: 'Orden oriental · 4 pzas', price: 70, note: 'Con queso 3 pzas + 10 pesitos' },
      { name: 'Triángulo con carne', price: 70, note: 'Con queso + 10 pesitos' },
    ] },
    { title: 'Carne árabe por kilo', items: [ // foto
      { name: 'El kilo', price: 400, note: 'Con salsas y complementos' },
      { name: 'Con queso', price: 450 },
    ] },
  ] },
  { id: 'guisados', cat: 'tacos', title: 'Guisados', groups: [
    { items: [ // foto cortada: $30, $30, "...ado $40", $35; nombres del menú viejo
      { name: 'Lengua', price: 30 },
      { name: 'Lechón', price: 30 },
      { name: 'Chicharrón prensado', price: 40 },
    ] },
    { title: 'Vegetariano', items: [{ name: 'Taquito Gonti', price: 35, note: 'Champiñones con huitlacoche' }] },
  ] },
  { id: 'mamon', cat: 'tacos', title: 'El taco más mamón', love: true, groups: [
    { items: [ // viejo
      { name: 'Gaonera de ribeye', price: 85 },
      { name: 'Gaonera de New York', price: 75 },
    ] },
  ], foot: 'Carne Aberdeen Black-Angus importada de Chicago, USA · Meats by Linz' },

  { id: 'botana', cat: 'picar', num: 24, name: 'La botana', art: ['botana'] },
  { id: 'picar', cat: 'picar', title: "Pa' picar", groups: [{ items: [ // viejo
    { name: 'Guacamole a la Anto', price: 60 },
    { name: 'Cebollitas a la Mantequisha', price: 45 },
    { name: 'Aceitunas a la Karola', price: 45 },
  ] }] },
  { id: 'huequito', cat: 'picar', title: "Pa' el huequito", groups: [{ items: [ // viejo
    { name: 'Sopa de fideos', price: 85, note: 'Con caldito de res y quesito' },
    { name: 'Queso fundido', price: 45 },
    { name: 'Queso fundido con carne', price: 55 },
  ] }] },

  { id: 'aguita', cat: 'tomar', num: 4, name: 'El aguita', art: ['aguita'] },
  { id: 'tomar', cat: 'tomar', title: "Pa' tomar", groups: [{ items: [ // foto
    { name: 'Aguas de sabor natural', price: 40, note: 'Horchata, verde, maracuyá…' },
    { name: 'Refresco', price: 35 },
    { name: 'Coca-Cola', price: 40 },
    { name: 'Botella de agua', price: 25 },
    { name: 'Strongbow Gold Apple', price: 45 },
  ] }] },
  { id: 'chelas', cat: 'tomar', title: 'Chelas', groups: [{ items: [ // viejo
    { name: 'Cervezas', price: 40, note: 'Amstel Ultra, XX Lager, XX Ámbar, Heineken Cero, Indio' },
    { name: 'Cuvana', price: 60 },
    { name: 'Michelada', price: 35 },
    { name: 'Chelada', price: 25 },
  ] }] },

  { id: 'pimponletas', cat: 'paletas', kicker: 'Las', title: 'Pimponletas', script: 'Paletas artesanales',
    art: ['angelito', 'traviesa'], foot: 'Presentadas por La Congelacleta' },
  { id: 'traviesas', cat: 'paletas', kicker: 'Las', title: 'Traviesas', script: 'con piquete', price: 35, art: ['traviesa'], groups: [ // foto
    { title: 'Frescas', items: [
      { name: 'Margarita picante de mango' }, { name: 'Naranja, arándanos y vodka' }, { name: 'Guayaba, limón y tequila' },
      { name: 'Cerveza con chamoy' }, { name: 'Clericot' }, { name: 'Azulito' },
    ] },
    { title: 'Cremosas', items: [
      { name: 'Chocolate con mezcal' }, { name: 'Horchata con mezcal' }, { name: 'Baileys con nuez' }, { name: 'Piña colada' },
    ] },
  ], foot: 'Solo con un 2% de alcohol' },
  { id: 'dulcecito', cat: 'paletas', title: 'Lo dulcecito', groups: [{ items: [{ name: 'Flan de la casa', price: 35 }] }] }, // viejo
  { id: 'novia', cat: 'paletas', frase: 'Aquí, como el cel de tu <em>novia</em> si buscas, <em>encuentras</em>' },
];
