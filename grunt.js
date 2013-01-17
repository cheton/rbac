/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        // Runs your QUnit tests
        qunit: {
            files: ['test/**/*.html']
        }
    });

    // Default tasks
    grunt.registerTask('default', 'qunit');

};
