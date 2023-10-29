/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      minHeight: {
        80: '20rem'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      bottom: {
        30: '7.5rem'
      },
      left: {
        8: 'rem'
      },
      height: {
        23: '5.75rem',
        25: '6.25rem',
        59: '14.75rem',
        100: '25rem',
        112: '28rem',
        118: '29.375rem',
        125: '31.25rem',
        134: '33.125rem',
        143: '35.75rem',
        188: '47rem',
        200: '50rem',
        213: '53.25rem',
        225: '56.25rem',
        228: '57rem',
        288: '72rem',
        313: '78.25rem',
        350: '87.5rem',
        375: '93.75rem',
        425: '106.25rem',
        525: '131.25rem'
      },
      width: {
        25: '6.25rem',
        52: '12.8rem',
        70: '17.5rem',
        81: '20.25rem',
        88: '22rem',
        98: '24.5rem',
        125: '31.25rem',
        133: '33.25rem',
        153: '38.25rem',
        228: '57rem',
        250: '62.5rem'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
