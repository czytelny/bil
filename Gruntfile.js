"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: true
            },
            all: ['Gruntfile.js', 'js/app/*.js',
                  'js/app/**/*.js']
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                files: {
                    'dist/bil.js': ['js/namespace.js',
                                    'js/constants.js',
                                    'js/directives/DirectivesFactory.js',
                                    'js/modules/RequestModule.js',
                                    'js/config/ConfigurationHandler.js',
                                    'js/config/ArticleConfiguration.js',
                                    'js/bil_dev.js',
                                    'js/vendor/pure.js']
                }
            }
        },
        uglify: {
            options: {
                mangleProperties: true,
                mangle: true,
                reserveDOMCache: true
            },
            dist: {
                files: {
                    'dist/bil.min.js': ['dist/bil.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('dev', ['jshint', 'karma', 'concat:dist']);
    grunt.registerTask('dist', ['concat', 'uglify']);
    grunt.registerTask('install', ['concat:dist']);
};