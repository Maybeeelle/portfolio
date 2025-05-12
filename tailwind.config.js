/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}", // if you're using /src structure
    ],
    theme: {
        extend: {
          fontFamily: {
            serif: ['"Playfair Display"', 'serif'],
            sans: ['Comic Neue', 'cursive'],
          },
          colors: {
            caramel: '#6e493a',
            'lavender-gray': '#9C96B0',
            
          },
        },
      },
    plugins: [],
  };
  


  