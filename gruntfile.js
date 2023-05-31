module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/styles.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/styles.less'
                }
            }
        },
        watch: {
            less: {
                files: 'src/styles/**/*.less',
                tasks: ['less:development'],
            },
            scripts: {
                files: 'src/scripts/*.js',
                tasks: ['uglify']
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('lessCompileAll', ['less']);
    grunt.registerTask('jsCompress', ['uglify']);


    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production','uglify']);
}