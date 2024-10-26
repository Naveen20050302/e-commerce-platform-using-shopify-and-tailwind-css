/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of your template files
  content: [
    './layout/**/*.liquid',   // Scans layout files
    './sections/**/*.liquid',  // Scans section files
    './snippets/**/*.liquid',  // Scans snippet files
    './templates/**/*.liquid', // Scans template files
    './assets/**/*.{html,js}', // Scans any HTML or JS files in assets
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom primary color
        secondary: '#9333EA', // Custom secondary color
        accent: '#FBBF24', // Custom accent color
        neutral: '#F3F4F6', // Custom neutral color
        'dark-gray': '#374151', // Custom dark gray color
        // Add more custom colors as needed
      },
      spacing: {
        '128': '32rem', // Custom spacing example
        '144': '36rem', // Custom spacing example
      },
      borderRadius: {
        '4xl': '2rem', // Custom border radius example
      },
      // Extend other theme properties if necessary
    },
  },
  plugins: [
    // Include any necessary plugins for additional functionality
    require('@tailwindcss/forms'), // for improved form styling
    require('@tailwindcss/typography'), // for better typography
    require('@tailwindcss/aspect-ratio'), // for aspect ratio utilities
  ],
};
