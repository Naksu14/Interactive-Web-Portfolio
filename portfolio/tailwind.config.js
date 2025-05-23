/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",  // Ensure it scans all your JS files
  ],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',  // Custom margin (example)
        '16': '4rem',    // Add custom margin of 4rem
        '20': '5rem',    // Add custom margin of 5rem
      },
      animation: {
        'rslide-in': 'slideIn 2s ease-out forwards',      // Slide in from the right
        'rslide-out': 'slideOut 2s ease-in forwards',    // Slide out to the right
        "tile-fade": "fade 0.5s ease-out",               // Tile fade animation
        'lslide-in': 'slideInLeft 2s ease-out forwards', // Slide in from the left
        'lslide-out': 'slideOutLeft 2s ease-in forwards', // Slide out to the left
        'slide-up': 'slideUp 0.5s ease-in forwards',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'scroll': 'scrollWheel 1.5s infinite',
        'gradient-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        // Slide in from right to left (for rslide-in)
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },  // Start off-screen to the right
          '100%': { transform: 'translateX(0)' },   // End at the original position
        },
        // Slide out to the right (for rslide-out)
        slideOut: {
          '0%': { transform: 'translateX(0)' },     // Start from the current position
          '100%': { transform: 'translateX(100%)' }, // Move off-screen to the right
        },
        // Slide in from left to right (for lslide-in)
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },  // Start off-screen to the left
          '100%': { transform: 'translateX(0)' },    // End at the original position
        },
        // Slide out to the left (for lslide-out)
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },      // Start from the current position
          '100%': { transform: 'translateX(-100%)' }, // Move off-screen to the left
        },
        // Fade animation for tile elements
        fade: {
          '0%': { opacity: 1, transform: 'scale(1.2)' },  // Start with opacity 1 and a slight scale up
          '100%': { opacity: 0, transform: 'scale(0.8)' }, // Fade out and scale down
        },
        scrollWheel: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(6px)', opacity: '0.5' },
        },
      },
      colors: {
        'custom-placeholder': '#59453F'
      },
    },
  },
  plugins: [
  //require('tailwind-scrollbar-hide')
],

};
