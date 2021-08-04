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
        extend: {}
    },
    variants: {
        extend: {}
    }
}
