const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// 生产环境
if (process.env.NODE_ENV == 'production') {
    module.exports = {
        plugins: [new BundleAnalyzerPlugin()],
        externals: {// 告诉webpack 这些东西不要打包，咱们给他变量的引用，可以使用cdn
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            axios: "axios",
        }
    };
} else {

    module.exports = {};

}