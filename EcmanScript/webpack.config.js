module.exports = {
    entry: ['@babel/polyfill','./src/main.js'],
    output : {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    //caminho de onde vai ficar o servidor da aplicacao (geralmente o odc index.html)
    devServer : {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};