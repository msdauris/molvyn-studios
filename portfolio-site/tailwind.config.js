/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Architectural Minimalism Palette
        'pure-white': '#ffffff',
        'true-black': '#000000',
        'charcoal': '#1a1a1a',
        'medium-gray': '#666666',
        'electric-blue': '#0066ff',
        'warm-amber': '#ff6b00',
        'cool-gray': '#f8f8f8',
        
        // Extended grays for subtle variations
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        // Fluid typography scale
        'display': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '700' }],
        'xl': ['clamp(1.5rem, 4vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'lg': ['clamp(1.125rem, 2.5vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '500' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
        'xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.3',
        'normal': '1.6',
        'relaxed': '1.8',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'normal': '0',
        'wide': '0.01em',
        'wider': '0.02em',
        'widest': '0.5px',
      },
      boxShadow: {
        'architectural': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'sharp': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'minimal': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'micro-scale': 'microScale 0.2s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        microScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      },
      transitionTimingFunction: {
        'sharp': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}