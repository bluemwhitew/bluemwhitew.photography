/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,liquid}'
    ],
    plugins: [],
    theme: {
        fontFamily: {
            sans: [
                '"Noto Sans JP"',
                '"Noto Sans"',
                'Arial',
                'sans-serif'
            ]
        },
        extend: {
            backgroundImage: {
                'noise': 'url("/assets/img/noise.png")',
            },
            colors: {
                'brand-bluemwhitew': '#00aaff',
                'brand-twitter': '#1da1f2'
            },
            gridTemplateColumns: {
                'media-relaxed': '50% 1fr',
                'media-loose': '60% 1fr'
            },
            gridTemplateRows: {
                'media-normal': 'repeat(3, 60vh)',
                'media-loose': 'repeat(2, minmax(20rem, 1fr))'
            },
            translate: {
                '3px': '3px'
            }
        }
    }
}
