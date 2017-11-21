module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
        },
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
    },
  });

  grunt.registerTask('default', ['watch']);

};
