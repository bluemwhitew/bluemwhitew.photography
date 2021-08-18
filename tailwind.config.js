module.exports = {
    darkMode: false,
    mode: 'jit', // 'jit'
    plugins: [],
    purge: [
        './src/**/*.{html,liquid}'
    ],
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
    },
    variants: {
        extend: {}
    }
}
