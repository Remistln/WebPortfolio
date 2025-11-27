/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bio: {
                    dark: '#0f172a', // slate-900
                    accent: '#10b981', // emerald-500
                },
                data: {
                    accent: '#0ea5e9', // sky-500
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
