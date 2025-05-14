
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
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
          foreground: 'hsl(var(--primary-foreground))',
          light: '#4e87cb',
          dark: '#1a5596',
          // Tech-themed shades
          50: '#eef5ff',
          100: '#d9e8fc',
          200: '#bbd7fa',
          300: '#8dc1f7',
          400: '#57a3f2',
          500: '#3b82f6',
          600: '#2068eb',
          700: '#1a56d6',
          800: '#1c46aa',
          900: '#1c3e85',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          // Tech secondary colors
          tech: '#6366f1', // Indigo for tech accent
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
        },
        // Tech-specific colors
        tech: {
          dark: '#0f172a',  // Slate 900
          light: '#f8fafc', // Slate 50
          accent: '#3b82f6', // Blue 500
          glow: '#60a5fa',  // Blue 400
          muted: '#64748b', // Slate 500
          code: '#1e293b',  // Slate 800
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
        },
        "accordion-up": {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' }
        },
        "fade-in": {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' }
        },
        "slide-up": {
          "0%": { transform: 'translateY(10px)', opacity: '0' },
          "100%": { transform: 'translateY(0)', opacity: '1' }
        },
        "float": {
          "0%, 100%": { transform: 'translateY(0px)' },
          "50%": { transform: 'translateY(-20px)' }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: '1' },
          "50%": { opacity: '0.5' }
        },
        "wiggle": {
          "0%, 100%": { transform: 'rotate(-3deg)' },
          "50%": { transform: 'rotate(3deg)' }
        },
        "spin-slow": {
          "0%": { transform: 'rotate(0deg)' },
          "100%": { transform: 'rotate(360deg)' }
        },
        "bounce-subtle": {
          "0%, 100%": { transform: 'translateY(0)' },
          "50%": { transform: 'translateY(-5px)' }
        },
        // Tech-themed animations
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3)' 
          },
          "50%": { 
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)' 
          }
        },
        "data-scan": {
          "0%": { 
            backgroundPosition: '0% 0%',
            opacity: '0.5'
          },
          "100%": { 
            backgroundPosition: '0% 100%',
            opacity: '0.8'
          }
        },
        "tech-blink": {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": { opacity: '1' },
          "20%, 24%, 55%": { opacity: '0.5' }
        },
        "circuit-flow": {
          "0%": { 
            strokeDashoffset: '1000' 
          },
          "100%": { 
            strokeDashoffset: '0' 
          }
        },
        "typing": {
          "from": { width: '0' },
          "to": { width: '100%' }
        },
        "cursor-blink": {
          "0%, 100%": { borderColor: 'transparent' },
          "50%": { borderColor: 'currentColor' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        // Tech animations
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "data-scan": "data-scan 2s ease-in-out infinite alternate",
        "tech-blink": "tech-blink 3s ease-in-out infinite",
        "circuit-flow": "circuit-flow 3s linear infinite",
        "typing": "typing 3s steps(40) 1s forwards",
        "cursor-blink": "cursor-blink 1.2s step-end infinite",
        // Combined tech animations
        "tech-hover": "glow-pulse 2s ease-in-out infinite, bounce-subtle 3s ease-in-out infinite",
        "data-flow": "data-scan 2s ease-in-out infinite alternate, pulse-slow 3s ease-in-out infinite"
      },
      backgroundImage: {
        'tech-grid': "radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)",
        'tech-gradient': "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
        'circuit-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%233b82f6' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
