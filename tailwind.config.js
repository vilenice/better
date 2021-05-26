module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'home-background': "url('/src/img/编组 20@2x.png')",
                'head-background': "url('/src/img/5cb8a9441ae1b + 5cb8a9441ae1b蒙版@2x.png')",
                'info-background': "url('/src/img/矩形@2x.png')",
                'arrow-background': "url('/src/img/箭头@2x.png')",
                'dialog-background': "url('/src/img/5f8fd6aeae308@2x.png')",
            }),
            spacing: theme => ({
                '18': '4.5rem',
                '88': '22rem',
                '112': '28rem',
                '120': '30rem',
                '126': '31.5rem',
                '160': '40rem',
                '164': '41rem',
                '180': '45rem',
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
            'black': '#000',
            'gray-DDD': '#DDDDDD',
            'button-background': '#00FAD5',
            'info-top-background': '#670E93',
            'info-bottom-background': '#0F187B',
            'deposit-left-button': '#E715EE',
            'deposit-right-button': '#FEEC23',
        },
        zIndex: {
            '1000': 1000,
        },
        outline: {
            0: '0',
        },
        fill: theme => ({
            'white': theme('colors.white'),
            'green': theme('colors.gray-DDD'),
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
}