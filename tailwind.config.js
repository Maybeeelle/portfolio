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
            'comic-neue': ['Comic Neue', 'cursive']
            
          },
          
          animation: {
            'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'float': 'float 2s ease-in-out infinite',
            'float-delay': 'float 2s ease-in-out infinite 0.5s',
            'float-delay-2': 'float 2s ease-in-out infinite 1s',
          },      keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            }
          },
          colors: {
            caramel: '#6e493a',
            'lavender-gray': '#9C96B0',
            'pastel-blue': '#A0C5E8',
            'pastel-lavender': '#C5A0E8',
            'pastel-mint': '#A0E8C5',
            'pastel-peach': '#E8C5A0',
            'pastel-pink': '#E8A0C5',
            'pastel-yellow': '#E8E0A0',
            
            // Cream Color Palette
            'cream-50': '#FAF5E6',
            'cream-100': '#F5EED1',
            'cream-200': '#F0E7BC',
            'cream-300': '#EBE0A7',
            'cream-400': '#E6D992',
            'cream-700': '#B8A764',
            'cream-800': '#8A7C4A',
            'cream-900': '#5C5230'
          },
          
        },
      },
    plugins: [],
  };
  


  