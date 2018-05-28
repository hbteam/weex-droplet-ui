const width = weex.config.env.deviceWidth;
const height = weex.config.env.deviceHeight;
const platform = weex.config.env.platform.toLowerCase();
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
            const platform = weex.config.env.platform;
            if (platform.toLocaleLowerCase() === 'web') {
                e.preventDefault && e.preventDefault();
                e.stopPropagation && e.stopPropagation();
            } else {
                e.stopPropagation();
            }
        }
    }
}

export default mixins;