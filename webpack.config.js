var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'build'),
        filename: 'index_bundle.js'
    },
   
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test: /\.jsx?$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {test: /\.(jpe?g|png|gif)$/i, loader: "file-loader"},
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]

}