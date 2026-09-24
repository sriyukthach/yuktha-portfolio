/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#06080e',
          secondary: '#0a0e18',
          tertiary: '#0e1525',
        },
        surface: {
          DEFAULT: '#0f172a',
          card: '#111b30',
          hover: '#172442',
          border: '#1e2e50',
          'border-subtle': '#16223c',
        },
        accent: {
          blue: '#3b82f6',
          'blue-light': '#60a5fa',
          'blue-dim': 'rgba(59, 130, 246, 0.12)',
          'pink-subtle': '#f472b6',
          'pink-dim': 'rgba(244, 114, 182, 0.08)',
          'pink-border': 'rgba(244, 114, 182, 0.22)',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
          subtle: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'subtle-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(15, 23, 42, 0.4)',
        'blue-glow-sm': '0 0 15px -3px rgba(59, 130, 246, 0.15)',
        'pink-glow-sm': '0 0 15px -3px rgba(244, 114, 182, 0.12)',
      }
    },
  },
  plugins: [],
}
