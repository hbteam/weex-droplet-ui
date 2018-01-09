/**
 * Created by yinshipeng on 2018/1/8
 */

export default {
    methods: {
        /**
         * 初始化字体文件
         */
        initIconFont () {
            let domModule = weex.requireModule('dom')
            domModule.addRule('fontFace', {
                'fontFamily': "iconfont",
                'src': "url('http://at.alicdn.com/t/font_534309_k25t5nvy4lz3erk9.ttf')"
            })
        },
    },
    created(){
        this.initIconFont()
    }
}