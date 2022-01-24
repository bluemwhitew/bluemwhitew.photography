module.exports = {
    content: [
        './src/**/*.{html,liquid}'
    ],
    plugins: [],
    theme: {
        fontFamily: {
            sans: [
                'Noto Sans',
                'Arial',
                'sans-serif'
            ]
        },
        extend: {
            colors: {
                'brand-bluemwhitew': '#00aaff',
                'brand-twitter': '#1da1f2'
            }
        }
    }
}
