module.exports = ( env, argv ) => {

    let config = {
        entry: './src/typescript/index.ts',
        output: {
            filename: 'bundle.js',
            path: __dirname + '/dist/js/'
        },

        resolve: {
            // add '.ts' and '.tsx' as resolvable extensions.
            extensions: [
                '.ts',
                '.tsx',
                '.js',
                '.json'
            ]
        },
    };

    // enable sourcemaps for debugging webpack's output.
    config.mode = 'development';
    config.devtool = 'source-map';

    config.module = {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },

            // all output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader'
            }
        ],
    };

    config.optimization = {
        minimize: false
    };

    config.devServer = {
        host: 'localhost',
        port: 1234,
        watchContentBase: true,
        publicPath: '/js/',
        contentBase: __dirname + '/dist/'
    };

    return config;
};
