// Karma configuration
// Generated on Mon Nov 24 2014 14:51:47 GMT+0100 (Środkowoeuropejski czas stand.)

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'js/vendor/angular_1.3.7.min.js',
            'js/vendor/angular-route_1.3.3.min.js',
            'js/vendor/angular-mocks_1.3.3.js',
            'js/vendor/angular-resource.min.js',
            'js/vendor/angular-cookies.min.js',
            'js/vendor/angular-translate.min.js',
            'js/vendor/angular-translate-storage-local.min.js',
            'js/vendor/angular-translate-storage-cookie.min.js',
            'js/vendor/angular-translate-loader-static-files.min.js',
            'js/vendor/spring-security-csrf-token-interceptor-mock.js',
            'js/vendor/angular-messages_1.3.7.min.js',
            'js/vendor/date.js',
            'js/vendor/timepickerdirective.min.js',
            'js/app/*.js',
            'js/app/**/*.js',
            'js/spec/*.js',
            'js/spec/**/*.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'js/clientApp/**/*.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage'],

        // the default configuration
        junitReporter: {
            outputFile: 'test-results.xml',
            suite: ''
        },

        coverageReporter: {
            dir: 'coverage',
            subdir: '.'
            // Would output the results into: .'/coverage/'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'phantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false

    });
};
