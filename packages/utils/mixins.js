const width = weex.config.env.deviceWidth;
const height = weex.config.env.deviceHeight;
const platform = weex.config.env.platform.toLowerCase();
const isWeb = platform === 'web';
const appName = weex.config.env.appName;

const mixins = {
    methods: {

        getPageHeight () {
            if (platform === 'android') {
                return 750 / width * height;
            }
            return height;
        },

        preventDefault (e) {
            e.preventDefault && e.preventDefault();
            e.stopPropagation && e.stopPropagation();
        },

        // px -> 32px
        px2rem (px) {
            if (platform !== 'web') {
                return px;
            } else {
                px = Number(px.replace('px', ''));
                return px / 75 + 'rem';
            }
        },
    }
}

export default mixins;