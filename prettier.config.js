export default {
  singleQuote: true,
  // para que prettier reconozca las clases personalizadas de css creadas en nuestro archivo de configuración tailwind.config.ts:
  tailwindConfig: './tailwind.config.js',
  // para que prettier reconozca las clases que están dentro de la función de la librería clsx:
  tailwindFunctions: ['clsx'],
  plugins: ['prettier-plugin-tailwindcss'],
};
