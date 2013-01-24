/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        // Runs your QUnit tests
        qunit: {
            files: [
                'test/**/*.html'
            ]
        }
    });

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default tasks
    grunt.registerTask('default', ['qunit']);

};
