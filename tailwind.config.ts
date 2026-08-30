import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          bg: '#0a0a0f',
          card: '#12121a',
          border: '#1f1f2e',
          primary: '#6366f1',
          accent: '#22d3ee',
          muted: '#9ca3af',
          heading: '#f9fafb'
        }
      }
    }
  },
  plugins: []
};
export default config;
