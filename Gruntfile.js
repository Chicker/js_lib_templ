module.exports = function (grunt) {
  "use strict";
  grunt.initConfig({
    watch: {
      requirejs: {
        files: ["lib/**/*.js"],
        tasks: ['bgShell:requirejs']
      }
    },

    bgShell: {
      requirejs: {
        cmd: 'r.js -convert lib/ build/',
        stdout: true,
        stderr: true,
        bg: false
      },

      'mocha-phantomjs': {
        cmd: 'mocha-phantomjs -R dot TestRunner.html',
        stdout: true,
        stderr: true,
        bg:false
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bg-shell');

  grunt.registerTask('build', ['bgShell:requirejs']);
  grunt.registerTask("test", ["bgShell:requirejs", "bgShell:mocha-phantomjs"]);
};