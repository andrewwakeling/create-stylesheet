'use strict';

module.exports = function (grunt) {
    var lines = [];
    lines.push('// <%= pkg.name %> <%= pkg.version %>');
    lines.push('// <%= pkg.author %>')
    lines.push('// <%= pkg.name %> may be freely distributed under the MIT license.');
    grunt.initConfig({
        banner:  lines.join('\n'),
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist'],
        umd: {
            umd: {
                src: 'create-stylesheet.js',
                dest: 'dist/create-stylesheet.js',
                template: 'umd',
                objectToExport: '_stylesheet',
                globalAlias: 'stylesheet'
            },
            commonjs: {
                src: 'create-stylesheet.js',
                dest: 'dist/create-stylesheet.commonjs.js',
                template: 'unit',
                objectToExport: '_stylesheet',
                globalAlias: 'stylesheet'
            }
        },
        uglify: {
            options: {
                report: 'min'
            },
            umd: {
                files: {
                    'dist/create-stylesheet.min.js': ['dist/create-stylesheet.js']
                }
            },
            commonjs: {
                files: {
                    'dist/create-stylesheet.commonjs.min.js': ['dist/create-stylesheet.commonjs.js']
                }
            }
        },
        copy: {
            unwrapped: {
                src: 'create-stylesheet.js',
                dest: 'dist/create-stylesheet.unwrapped.js'
            }
        },
        usebanner: {
            dist: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    src: [
                        'dist/create-stylesheet.js',
                        'dist/create-stylesheet.min.js',
                        'dist/create-stylesheet.commonjs.js',
                        'dist/create-stylesheet.commonjs.min.js',
                        'dist/create-stylesheet.unwrapped.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-umd');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-banner');

    grunt.registerTask('default', ['clean', 'umd:umd', 'umd:commonjs', 'uglify:umd', 'uglify:commonjs', 'copy:unwrapped', 'usebanner:dist']);
};