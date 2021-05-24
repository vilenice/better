module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'home-background': "url('/src/img/编组 20@2x.png')",
                'head-background': "url('/src/img/5cb8a9441ae1b@2x.png')",
                'info-background': "url('/src/img/矩形@2x.png')",
            }),
            spacing: theme => ({
                '88': '22rem',
                '112': '28rem',
                '160': '40rem',
                '224': '56rem',
            })
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'body-background': '#2C0264',
            'bottom-background': '#2C0264',
            'security-background': '#3A0383',
            'works-red-background': '#D40083',
            'works-blue-background': '#0B89D3',
            'works-purple-background': '#6819A4',
            'works-head-red-background': '#FF78C1',
            'works-head-blue-background': '#56CBFA',
            'works-head-purple-background': '#B524F7',
        }),
        textColor: theme => ({
            ...theme('colors'),
            'title-one': '#E81BE8',
            'info-text': '#549DFE',
            'bottom-text': '#6E5C84',
            'bottom-text-hover': '#B09BCA',
        }),
        colors: {
            'white': '#fff',
            'button-background': '#00FAD5',
            'info-top-background': '#670E93',
            'info-bottom-background': '#0F187B',
            'deposit-left-button': '#E715EE',
            'deposit-right-button': '#FEEC23',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}