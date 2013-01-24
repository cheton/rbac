/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        jshint: {
            options: {
                es5: true, // Tolerate ES5 syntax
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    __dirname: true,
                    process: true,
                    exports: true,
                    module: true,
                    console: true,
                    define: true,
                    jQuery: true,
                    '$': true
                }
            },
            all: [
                'Gruntfile.js',
                'rbac.js'
            ]
        },
        qunit: {
            files: [
                'test/**/*.html'
            ]
        }
    });

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default tasks
    grunt.registerTask('default', ['jshint', 'qunit']);

};
