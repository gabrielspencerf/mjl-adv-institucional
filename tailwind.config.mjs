/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '375px',
            },
            colors: {
                mjl: {
                    gold: '#8C6B3D',
                    goldLight: '#B58E58',
                    goldDim: 'rgba(140, 107, 61, 0.1)',
                    dark: '#231712',
                    darker: '#140D0A',
                    light: '#F7F5F2',
                    gray: '#5C5552',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
            transitionTimingFunction: {
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
                'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s cubic-bezier(0.19, 1, 0.22, 1) forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite',
                'scroll-indicator': 'scroll 2s cubic-bezier(0.45, 0, 0.55, 1) infinite',
                'shine': 'shine 2.5s ease-in-out infinite',
                'blob': 'blob 15s infinite',
                'float': 'float 8s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scroll: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(10px)', opacity: '0' }
                },
                shine: {
                    '0%': { backgroundPosition: '200% center' },
                    '100%': { backgroundPosition: '-200% center' }
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                }
            },
            boxShadow: {
                'glow': '0 0 20px rgba(150, 114, 65, 0.3)',
                'card': '0 10px 30px -5px rgba(35, 23, 18, 0.08)',
                'card-hover': '0 25px 50px -12px rgba(150, 114, 65, 0.15)',
            },
        }
    },
    plugins: [],
}
