var webpack = require('webpack');

module.exports = {
    //context: path.join(__dirname, '../../'),
    debug: false,
    entry: [
        './client/js/main.js'
    ],
    output: {
        path: './client/public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                },
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
