/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-soft': '#F7F1F1',
        'ink': '#181414',
        'ink-soft': '#57504F',
        'ink-faint': '#8F8686',
        'blue': '#A6182E',
        'blue-deep': '#141010',
        'blue-line': 'rgba(166, 24, 46, 0.18)',
        'yellow': '#D42A44',
        'yellow-deep': '#8A0F23',
        'yellow-soft': '#FBE4E7',
        'border-custom': '#E8E1E1', // renaming to avoid clash with border property
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        'custom': '0 20px 40px -20px rgba(20, 16, 16, 0.22)',
      },
      borderRadius: {
        'custom': '14px',
      },
      animation: {
        blink: 'blink 1.6s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.25' },
        },
      }
    },
  },
  plugins: [],
}
