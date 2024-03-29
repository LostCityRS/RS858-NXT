const path = require('path');

module.exports = [
    {
        name: "worker-d",
        target: "webworker",
        entry: 'd.js',
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src'), "node_modules"],
        },
        performance: {
            hints: false,
            maxEntrypointSize: 5120000,
            maxAssetSize: 5120000
        },
        optimization: {
            minimize: false,
        },
        output: {
            filename: 'd.js',
            path: path.resolve(__dirname, 'static/dist'),
        },
    },
    {
        name: "worker-f",
        target: "webworker",
        entry: 'f.js',
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src'), "node_modules"],
        },
        performance: {
            hints: false,
            maxEntrypointSize: 5120000,
            maxAssetSize: 5120000
        },
        optimization: {
            minimize: false,
        },
        output: {
            filename: 'f.js',
            path: path.resolve(__dirname, 'static/dist'),
            // publicPath: "/dist/"
        },
    },
    {
        name: "worker-g",
        target: "webworker",
        entry: 'g.js',
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src'), "node_modules"],
        },
        performance: {
            hints: false,
            maxEntrypointSize: 5120000,
            maxAssetSize: 5120000
        },
        optimization: {
            minimize: false,
        },
        output: {
            filename: 'g.js',
            path: path.resolve(__dirname, 'static/dist'),
            // publicPath: "/dist/"
        },
    },
    {
        name: "worker-h",
        target: "webworker",
        entry: 'h.js',
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src'), "node_modules"],
        },
        performance: {
            hints: false,
            maxEntrypointSize: 5120000,
            maxAssetSize: 5120000
        },
        optimization: {
            minimize: false,
        },
        output: {
            filename: 'h.js',
            path: path.resolve(__dirname, 'static/dist'),
            // publicPath: "/dist/"
        },
    },
    {
        dependencies: ["worker-d", "worker-f", "worker-g", "worker-h"],
        entry: 'bootstrap.js',
        resolve: {
            extensions: ['.js'],
            modules: [path.resolve(__dirname, 'src'), "node_modules"],
        },
        performance: {
            hints: false,
            maxEntrypointSize: 5120000,
            maxAssetSize: 5120000
        },
        output: {
            filename: 'bootstrap.js',
            path: path.resolve(__dirname, 'static/dist'),
            // publicPath: "/dist/"
        },
        optimization: {
            minimize: false,
        },
        devServer: {
            static: path.resolve(__dirname, 'static'),
            compress: true,
            port: 4000,
        },
        devtool: 'source-map',
    }
]