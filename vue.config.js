'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    outputDir: "./dist",
    publicPath: "/",
    assetsDir: 'static',
    chainWebpack: config => {

    },
    configureWebpack: {
        name: 'demo',
        resolve: {
            alias: {
                '@': resolve('src'),
                '@img': resolve('src/assets/img'),
                '${public}': resolve('public')
            }
        }
    },
}
