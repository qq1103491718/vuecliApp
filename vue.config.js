module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: process.env.VUE_APP_URL,
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ // 把px单位换算成rem单位
                        rootValue: 18.5, // 换算的基数(设计图750的根字体为32)
                        selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*']
                    })
                ]
            }
        }
    }
}