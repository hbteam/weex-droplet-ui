const width = weex.config.env.deviceWidth;
const height = weex.config.env.deviceHeight;
const platform = weex.config.env.platform.toLowerCase();
const appName = weex.config.env.appName;

const mixins = {
    data () {
        return {
            $env: {
                isWeb: platform === 'web',
                isAndroid: platform === 'android',
                isIos: platform === 'ios',
            },
        }
    },
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
        }
    }
}

export default mixins;