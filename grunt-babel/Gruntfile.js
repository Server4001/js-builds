module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Modules example (import/export).
        browserify: {
            app: {
                options: {
                    browserifyOptions: {
                        debug: true,
                        transform: ["babelify"]
                    }
                },
                src: "js/modules/**/*.js",
                dest: "build/modules/ModulesExample.js"
            }
        },

        babel: {
            options: {
                sourceMap: true,
                stage: 0
            },
            dist: {
                files: {
                    "build/let.js": "js/let.js",
                    "build/const.js": "js/const.js",
                    "build/destructuring.js": "js/destructuring.js",
                    "build/default-parameter-values.js": "js/default-parameter-values.js",
                    "build/rest-parameters.js": "js/rest-parameters.js",
                    "build/spread-operator.js": "js/spread-operator.js",
                    "build/template-literals.js": "js/template-literals.js",
                    "build/classes-defining.js": "js/classes-defining.js",
                    "build/arrow-functions.js": "js/arrow-functions.js",
                    "build/map-data-type.js": "js/map-data-type.js",
                    "build/set-data-type.js": "js/set-data-type.js",
                    "build/for-of.js": "js/for-of.js",
                    "build/iterator.js": "js/iterator.js",
                    "build/classes-making-iterable.js": "js/classes-making-iterable.js",
                    "build/generators.js": "js/generators.js",
                    "build/comprehensions.js": "js/comprehensions.js",
                    "build/numbers.js": "js/numbers.js",
                    "build/math.js": "js/math.js",
                    "build/arrays.js": "js/arrays.js",
                    "build/weak-maps-and-sets.js": "js/weak-maps-and-sets.js",
                    "build/promise-basics.js": "js/promise-basics.js",
                    "build/promises-advanced.js": "js/promises-advanced.js",
                    "build/generators-async.js": "js/generators-async.js",
                    "build/object-methods-is-and-assign.js": "js/object-methods-is-and-assign.js",
                    "build/object-shorthand-computed-props.js": "js/object-shorthand-computed-props.js",
                    "build/proxies.js": "js/proxies.js",
                    "build/async-await.js": "js/async-await.js",
                    "build/string-functions.js": "js/string-functions.js"
                }
            }
        },

        //concat: {
        //    dist: {
        //        src: [
        //            'build/let.js',
        //            'build/const.js'
        //        ],
        //        dest: 'build/app.js'
        //    },
        //    options: {
        //        separator: ';',
        //        sourceMap: true
        //    }
        //},

        //uglify: {
        //    app: {
        //        files: {
        //            'build/app.min.js': ['build/app.js']
        //        },
        //        options: {
        //            sourceMap: true,
        //            sourceMapIn: 'build/app.js.map'
        //        }
        //    }
        //},

        watch: {
            es6: {
                files: ['js/**/*.js'],
                tasks: ['browserify', 'babel']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['js/*.js', 'index.html']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['browserify', 'babel']);
};
