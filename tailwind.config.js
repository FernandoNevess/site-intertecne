/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: ['class'],
      content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
      ],
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
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
              foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
            'roxo-neon': '#9926FF',
            'ciano-neon': '#2ADAFF',
            'azul-escuro-profundo': '#313344',
            'azul-profissional': '#214478',
            'azul-claro-suave': '#AFCCE9',
            'branco-azulado': '#D7E3F4',
          },
          fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
          },
          keyframes: {
            'accordion-down': {
              from: { height: 0 },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: 0 },
            },
            'pulse-glow-purple-soft': {
              '0%, 100%': { boxShadow: '0 0 3px #9926FF, 0 0 6px #9926FF' },
              '50%': { boxShadow: '0 0 10px #9926FF, 0 0 15px #9926FF' },
            },
            'pulse-glow-cyan-soft': {
              '0%, 100%': { boxShadow: '0 0 3px #2ADAFF, 0 0 6px #2ADAFF' },
              '50%': { boxShadow: '0 0 10px #2ADAFF, 0 0 15px #2ADAFF' },
            },
            'slide-in': {
              '0%': { transform: 'translateY(20px)', opacity: 0 },
              '100%': { transform: 'translateY(0)', opacity: 1 },
            }
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'pulse-glow-purple-soft': 'pulse-glow-purple-soft 2s infinite ease-in-out',
            'pulse-glow-cyan-soft': 'pulse-glow-cyan-soft 2s infinite ease-in-out',
            'slide-in': 'slide-in 0.5s ease-out forwards',
          },
        },
      },
      plugins: [require('tailwindcss-animate')],
    };