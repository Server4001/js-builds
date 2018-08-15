module.exports = function(grunt) {
    require("time-grunt")(grunt);
    require("load-grunt-tasks")(grunt);

    const eslintConfig = "eslint.config.json";

    const appConfig = {
        js: {
            source: "src/js/app/**/*.js",
            dest: "dist/js/app.js",
            destMap: "dist/js/app.js.map",
            min: "public/javascripts/app.min.js"
        },
        styles: {
            mainSass: "src/sass/ui.scss",
            min: "public/stylesheets/ui.min.css",
            sassWatch: "src/sass/**/*.scss"
        }
    };

    let exorciseFiles = {};
    exorciseFiles[appConfig.js.destMap] = [appConfig.js.dest];

    let uglifyFiles = {};
    uglifyFiles[appConfig.js.min] = appConfig.js.dest;

    let sassFiles = {};
    sassFiles[appConfig.styles.min] = appConfig.styles.mainSass;

    const liveReload = [
        "public/javascripts/**/*.js",
        "public/stylesheets/**/*.min.css",
        "views/**/*.jade"
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        eslint: {
            options: {
                configFile: eslintConfig
            },
            app: {
                src: appConfig.js.source
            }
        },

        browserify: {
            app: {
                options: {
                    transform: [['babelify', { presets: "latest" }]],
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: appConfig.js.source,
                dest: appConfig.js.dest
            }
        },

        exorcise: {
            bundle: {
                options: {
                    base: 'dist/js'
                },
                files: exorciseFiles
            }
        },

        uglify: {
            app: {
                options: {
                    sourceMap: true,
                    sourceMapIn: appConfig.js.destMap,
                    mangle: true
                },
                files: uglifyFiles
            }
        },

        sass: {
            app: {
                options: {
                    sourcemap: "auto",
                    style: "compressed"
                },
                files: sassFiles
            }
        },

        postcss: {
            options: {
                map: {
                    inline: false
                },
                processors: [
                    require('pixrem')(),
                    require('autoprefixer')({
                        browsers: 'last 2 versions'
                    }),
                    require('cssnano')({
                        zindex: false
                    })
                ],
                failOnError: true
            },
            dist: {
                src: appConfig.styles.min
            }
        },

        watch: {
            browserify: {
                files: [
                    appConfig.js.source
                ],
                tasks: [
                    "eslint",
                    "browserify",
                    "exorcise",
                    "uglify"
                ]
            },
            sass: {
                files: [
                    appConfig.styles.sassWatch
                ],
                tasks: [
                    "sass",
                    "postcss"
                ]
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: liveReload
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-exorcise");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask("default", [
        "eslint",
        "browserify",
        "exorcise",
        "uglify",
        "sass",
        "postcss"
    ]);
    grunt.registerTask("css", [
        "sass",
        "postcss"
    ]);
    grunt.registerTask("js", [
        "eslint",
        "browserify",
        "exorcise",
        "uglify"
    ]);
};
