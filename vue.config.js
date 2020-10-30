
module.exports = {
    productionSourceMap: false,
    outputDir: "./lib/public",
    devServer: {
        proxy: 'http://127.0.0.1:8088'
    },
}

