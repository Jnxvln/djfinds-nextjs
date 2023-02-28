/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        screens: {
            'mobile-sm': '320px',
            'mobile-md': '375px',
            'mobile-lg': '425px',
            tablet: '768px',
            laptop: '1024px',
            desktop: '1440px',
            '4k': '2560px',
        },
    },
    plugins: [],
}
