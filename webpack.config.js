    /* 引入操作路径模块和webpack */
    var path = require('path');
    var webpack = require('webpack');

    module.exports = {
        /* 输入文件 */
        entry: "./src/main.js",
        output: {
            /* 输出目录，没有则新建 */
            path: path.resolve(__dirname, './dist'),
            /* 静态目录，可以直接从这里取文件 */
            publicPath: '/dist/',
            /* 文件名 */
            filename: 'build.js'
        },
        mode: 'development',
        // mode: 'production',
        module: {
            rules: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: ['url-loader?limit=5000&name=img/[hash:8].[name].[ext]']
                },
                {
                    test: /\.less$/,
                    loader: 'style-loader!css-loader!less-loader'
                },
                {
                    test: /\.css$/,
                    loader: 'css-loader!style-loader',
                }
            ]
        },
    }