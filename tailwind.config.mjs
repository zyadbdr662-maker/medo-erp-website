/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Tajawal', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          navy: '#0f172a',
          blue: '#1e40af',
          light: '#3b82f6',
          gold: '#f59e0b'
        }
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: { '2xl': '1200px' }
      }
    }
  },
  plugins: []
};
