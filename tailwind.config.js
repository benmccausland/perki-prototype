/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // PERKi colour tokens — neutral, off-white, no colour-heavy surfaces
      colors: {
        canvas:   '#F7F7F5', // page / screen background
        surface:  '#FFFFFF', // cards, sheets
        surface2: '#F2F2F0', // secondary surfaces, input backgrounds
        border:   '#E5E5E2', // dividers, strokes
        label:    '#1C1C1E', // primary text  (iOS system label)
        label2:   '#6B6B70', // secondary text (iOS secondary label)
        label3:   '#AEAEB2', // tertiary text  (iOS tertiary label)
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card:  '0 1px 4px rgba(0,0,0,0.06)',
        sheet: '0 -1px 0 rgba(0,0,0,0.06), 0 -8px 32px rgba(0,0,0,0.10)',
        tab:   '0 -0.5px 0 rgba(0,0,0,0.10)',
      },
      keyframes: {
        'slide-up': {
          '0%':   { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
        'fade-in':  'fade-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
