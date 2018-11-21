module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-concat-css");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-htmlcompressor");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-node-sass");





    var jsSrc = ["src/js/jquery.min.js", "dist/src/scripts/*.js", "src/js/main.js"];
    var jsDist = "bin/src/built.js";

    var cssSrc = "dist/src/css/*.css";
    var cssDist = "bin/src/built.css";



    grunt.initConfig({
        //##################################################  JS  ####################################################//

        //concat JS
        concat: {
            options: {
                separator: ";",
            },
            compile: {

                src: jsSrc,
                dest: jsDist,

            },
        },

        //minified JS
        uglify: {
            compile: {
                files: {
                    'include/built.min.js': 'bin/src/built.js',
                }
            }
        },
        //##################################################  CSS  ####################################################//
        //SASS
        sass: {
            dist: {
                src: 'src/css/main.scss',
                dest: 'dist/src/css/main.css',
            }
        },
        //concat CSS
        concat_css: {
            options: {
                separator: ";",
            },
            compile: {
                src: cssSrc,
                dest: cssDist,

            },
        },
        //minified CSS
        cssmin: {
            target: {
                files: {
                    'include/built.min.css': 'bin/src/built.css',

                }
            }
        },
        //##################################################  HTML  ####################################################//
        //minified HTML
        htmlcompressor: {
            compile: {
                options: {
                    type: 'html',
                    preserveServerScript: true
                },
                files: {
                    "index.html": "src/view/index.html",
                }
            },
        },

        //##################################################  WATCHER  ####################################################//

        watch: {
            scripts: {
                files: ["dist/src/css/*.css", "dist/src/scripts/*.js", "src/css/*.scss", "src/js/*.js", "src/view/*.html"],
                tasks: ["scripts:dev"],
            },
        },
    });

    grunt.registerTask("default", ["dev", "watch"]);
    grunt.registerTask("dev", ["scripts:dev"]);
    grunt.registerTask("scripts:dev", ["concat", "uglify", "sass", "concat_css", "cssmin", "htmlcompressor"]);


};