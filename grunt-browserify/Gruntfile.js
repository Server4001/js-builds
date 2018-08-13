module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //uglify: {
        //    app: {
        //        files: {
        //            'js/app.min.js': ['js/app.js']
        //        },
        //        options: {
        //            sourceMap: true,
        //            sourceMapIn: 'js/app.js.map'
        //        }
        //    },
        //    file_reader_uploader: {
        //        files: {
        //            'file-reader-uploader/js/script.min.js': ['file-reader-uploader/js/script.js']
        //        },
        //        options: {
        //            sourceMap: true,
        //            sourceMapIn: 'file-reader-uploader/js/script.js.map'
        //        }
        //    }
        //},

        browserify: {
            main: {
                options: {
                    browserifyOptions: {
                        debug: true,
                        transform: ['reactify', 'babelify'],
                        extensions: ['.jsx']
                    }
                },
                src: 'js/react/*.jsx',
                dest: 'build/app.js'
            }
        },

        exorcise: {
            bundle: {
                options: {},
                files: {
                    'build/app.js.map': ['build/app.js']
                }
            }
        },

        watch: {
            browserify: {
                files: ['js/react/*.jsx'],
                tasks: ['browserify', 'exorcise']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['js/react/*.jsx', 'index.html']
            }
        }
    });


    //grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exorcise');

    grunt.registerTask('default', ['browserify', 'exorcise']);
};
