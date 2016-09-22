/**
 * Configuration object for all tasks.
 *
 * @type {Object}
 */
let config = {};

/**
 * Where built output (CSS, JS, HTML, fonts, images) should be stored on the
 * filesystem. Can either be an absolute path or relative path to the location
 * of the gulpfile.
 *
 * @type {String}
 */
config.destPath = './dist/';

/**
 * A re-used path specifying where the test suite should save results.
 *
 * @type {String}
 */
config.testResultsPath = './test-results/';

/**
 * Configuration settings for any task which needs them. Keys should match the
 * task name for consistency and easier maintenance.
 *
 * @type {Object}
 */
config.taskConfiguration = {
    lint: {
        sourcePaths: ['./js/src/**/*.js', './run/**/*.js']
    },
    scripts: {
        /**
         * A folder path that is prefixed with the global `destPath` to give a
         * standard destination for JS bundles.
         *
         * @type {String}
         */
        genericOutputFolder: './js/',

        /**
         * Settings for webpacks uglify plugin.
         *
         * @type {Object}
         */
        uglifySettings: {
            compress: {
                'drop_console': false,
                'drop_debugger': false,
                'warnings': false
            }
        },

        /**
         * Settings for the Browser-sync plugin.
         *
         * @type {Object}
         */
        browserSyncSettings: {
            files: [
                'dist/**/*.html',
                'dist/css/**/*.css',
                'dist/js/**/*.js',
                'dist/img/**/*.*'
            ],
            logConnections: true,
            open: false,
            port: process.env.PORT || 4321,
            server: './dist/'
        },

        /**
         * Base settings for webpack.
         *
         * NOTE: For a full list of options, please visit:
         * https://webpack.github.io/docs/configuration.html
         *
         * @type {Object}
         */
        webpackSettings: {
            watch: false,
            entry: {
            },
            output: {
                filename: '[name].js'
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components|run\/tasks\/test\/wrapper\.js)/,
                        loader: 'babel'
                    }
                ]
            },
            plugins: [
            ]
        }
    },
    test: {
        configPath: __dirname + '/../karma.conf.js'
    }
};

module.exports = config;
