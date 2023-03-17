

// vue-cli的配置文件
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:7001",
            },
            "/static": {
                target: "http://127.0.0.1:7001"
            }
        },

        // historyApiFallback: true,
    },
    publicPath: "/",// 部署的时候路径要加点   publicPath:"./"
    configureWebpack: require("./webpack.config"),
}