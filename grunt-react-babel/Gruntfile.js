module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            task_list: {
                files: {
                    'build/task_list.min.js': ['build/task_list.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/task_list.js.map'
                }
            },
            task_app: {
                files: {
                    'build/task_app.min.js': ['build/task_app.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/task_app.js.map'
                }
            },
            gist: {
                files: {
                    'build/gist.min.js': ['build/gist.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/gist.js.map'
                }
            },
            gist_box: {
                files: {
                    'build/gist_box.min.js': ['build/gist_box.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/gist_box.js.map'
                }
            },
            gist_add_form: {
                files: {
                    'build/gist_add_form.min.js': ['build/gist_add_form.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/gist_add_form.js.map'
                }
            },
            refs: {
                files: {
                    'build/stopwatch.min.js': ['build/stopwatch.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/stopwatch.js.map'
                }
            },
            component_lifecycle: {
                files: {
                    'build/component_lifecycle.min.js': ['build/component_lifecycle.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/component_lifecycle.js.map'
                }
            },
            prop_types: {
                files: {
                    'build/prop_types.min.js': ['build/prop_types.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/prop_types.js.map'
                }
            },
            statics: {
                files: {
                    'build/statics.min.js': ['build/statics.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/statics.js.map'
                }
            },
            class_syntax: {
                files: {
                    'build/class_syntax.min.js': ['build/class_syntax.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/class_syntax.js.map'
                }
            },
            create_factory: {
                files: {
                    'build/create_factory.min.js': ['build/create_factory.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/create_factory.js.map'
                }
            },
            plupload: {
                files: {
                    'build/plupload.min.js': ['build/plupload.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/plupload.js.map'
                }
            },
            cropper: {
                files: {
                    'build/cropper.min.js': ['build/cropper.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/cropper.js.map'
                }
            },
            print_size: {
                files: {
                    'build/print_size.min.js': ['build/print_size.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/print_size.js.map'
                }
            },
            wizard: {
                files: {
                    'build/wizard.min.js': ['build/wizard.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/wizard.js.map'
                }
            },
            method_bindings_with_es6: {
                files: {
                    'build/method-bindings-with-es6.min.js': ['build/method-bindings-with-es6.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapIn: 'build/method-bindings-with-es6.js.map'
                }
            }
        },

        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "build/gist.js": "not-compiled/gist.js",
                    "build/gist_box.js": "not-compiled/gist_box.js",
                    "build/gist_add_form.js": "not-compiled/gist_add_form.js",
                    "build/task_app.js": "not-compiled/task_app.js",
                    "build/task_list.js": "not-compiled/task_list.js",
                    "build/stopwatch.js": "not-compiled/stopwatch.js",
                    "build/component_lifecycle.js": "not-compiled/component_lifecycle.js",
                    "build/prop_types.js": "not-compiled/prop_types.js",
                    "build/statics.js": "not-compiled/statics.js",
                    "build/class_syntax.js": "not-compiled/class_syntax.js",
                    "build/create_factory.js": "not-compiled/create_factory.js",
                    "build/plupload.js": "not-compiled/plupload.js",
                    "build/cropper.js": "not-compiled/cropper.js",
                    "build/print_size.js": "not-compiled/print_size.js",
                    "build/wizard.js": "not-compiled/wizard.js",
                    "build/method-bindings-with-es6.js": "not-compiled/method-bindings-with-es6.js"
                }
            }
        },

        react: {
            dynamic_mappings: {
                files: [
                    {
                        expand: true,
                        cwd: 'not-compiled/src',
                        src: ['**/*.js'],
                        dest: 'not-compiled',
                        ext: '.js'
                    }
                ]
            }
        },

        watch: {
            react: {
                files: ['not-compiled/src/**/*.js'],
                tasks: ['react', 'babel', 'uglify']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['build/**/*.js']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('default', ['react', 'babel', 'uglify']);
};
