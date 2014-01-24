'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    recess: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'assets/css/global.min.css': [
            '_assets/less/global.less'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/global.min.js': [
            '_assets/js/bootstrap.min.js',
            '_assets/js/sponsor.js',
            '_assets/js/analytics.js'
          ]
        }
      }
    },
    watch: {
      less: {
        files: ['_assets/less/**/*.less'],
        tasks: ['recess']
      },
      js: {
        files: ['_assets/js/**/*.js'],
        tasks: ['uglify']
      }
    },
    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/js/global.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');

  // Register tasks
  grunt.registerTask('default', ['clean', 'recess', 'uglify']);
  grunt.registerTask('dev', ['watch']);

};