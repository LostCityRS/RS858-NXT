const path = require('path');

module.exports = [
    {
        name: "worker-d",
        target: "webworker",
        entry: './src/d.js',
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src')],
        },
        optimization: {
            minimize: false,
        },
        output: {
            filename: 'd.js',
            path: path.resolve(__dirname, 'dist'),
        },
    },
    {
        name: "worker-f",
        target: "webworker",
        entry: './src/f.js',
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src')],
        },
        optimization: {
            minimize: false,
        },
        output: {
            filename: 'f.js',
            path: path.resolve(__dirname, 'dist'),
            // publicPath: "/dist/"
        },
    },
    {
        name: "worker-g",
        target: "webworker",
        entry: './src/g.js',
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src')],
        },
        optimization: {
            minimize: false,
        },
        output: {
            filename: 'g.js',
            path: path.resolve(__dirname, 'dist'),
            // publicPath: "/dist/"
        },
    },
    {
        name: "worker-h",
        target: "webworker",
        entry: './src/h.js',
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src')],
        },
        optimization: {
            minimize: false,
        },
        output: {
            filename: 'h.js',
            path: path.resolve(__dirname, 'dist'),
            // publicPath: "/dist/"
        },
    },
    {
        dependencies: ["worker-d", "worker-f", "worker-g", "worker-h"],
        entry: './src/Bootstrap.js',
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src')],
        },
        output: {
            filename: 'Bootstrap.js',
            path: path.resolve(__dirname, 'dist'),
            // publicPath: "/dist/"
        },
        optimization: {
            minimize: false,
        },
        devServer: {
            static: path.resolve(__dirname),
            compress: true,
            port: 4000,
            hot: false
        },
        devtool: 'source-map',
    }
]