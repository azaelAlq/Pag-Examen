/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  fondo: '#FFFDE7', // Amarillo muy suave, similar a la cera de abejas, para el fondo
		  titulos: '#FFB300', // Amarillo dorado intenso para los títulos, evocando la miel
		  textoAcento: '#FFC107', // Amarillo brillante para acentos en el texto
		  textoClaro: '#FFFFFF', // Blanco puro para contraste en texto claro
		  bgPrincipal: '#FFD54F', // Amarillo suave para fondos principales, cálido y atractivo
		  hoverBoton: '#FF6F00', // Naranja oscuro para efecto hover en botones, como tonos de miel caramelizada
		  colorAcento: '#8D6E63', // Marrón cálido para destacar elementos, similar a los colores de los panales
		  bgBlanco: '#FFF3E0', // Amarillo pálido, casi blanco, para fondos suaves y neutros
		  borderAcento: '#6D4C41', // Marrón oscuro para bordes, evocando los colores de la abeja
		},
		backgroundImage: {
		  'fondoPrincipal': "url('/public/BeeBackground.jpg')", // Imagen de fondo personalizada relacionada con abejas o productos naturales
		},
	  },
	},
	plugins: [],
}
