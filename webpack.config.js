const {resolve} = require('path')

module.exports = {
    entry: './DateDiff/js/index.js',
    output: {
        filename: 'main.[contanthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules:[
            {
                test: /\.(png|jpeg|gif|mp3)/i,
                use: 'file-loader'
            }
        ]
    }
}