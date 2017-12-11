module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    express: {
      all: {
        options: {
          bases: ['./app/'],
          port: 8080,
          hostname: '0.0.0.0',
          livereload: true,
          open: true
        }
      }
    },
    sass: {
      options: {
        sourceMap: true },
      dist: {
        files: {
          'app/styles/css/main.css': 'app/styles/scss/main.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {},
      },
      all: {
        files: '**/*.html',
        options: {
          livereload: true
        }
      }
    },
  });

  grunt.registerTask('default', ['express', 'watch']);

};
