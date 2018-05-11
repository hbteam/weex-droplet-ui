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

        /**
         * ios和安卓的定位不同，所以导致定位位置不一样
         * @return {Object} top and bottom
         */
        getPosition () {
            
            const isProd = (platform === 'ios' && appName !== 'WeexDemo');
            return {
                top: isProd ? '-40px' : '0px',
                bottom: isProd ? '36px' : '0px',
            };
        },
    }
}

export default mixins;