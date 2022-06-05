const {resolve} = require('path')

module.exports = {
    entry: './DateDiff/js/main.js',
    output: {
        filename: 'main.[contanthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules:[
            {
                test: /\.(png|jpeg|gif|mp3)$/i,
                use: 'file-loader',
                options:{
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: ['style.loader', 'css-loader']
            }
        ]
    }
}