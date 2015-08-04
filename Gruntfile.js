
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    less: {
      dist: {
        options: {
          strictMath: true
        },
        src: '_assets/less/global.less',
        dest: 'assets/css/global.css'
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          "Android 2.3",
          "Android >= 4",
          "Chrome >= 31",
          "Firefox >= 30",
          "Explorer >= 8",
          "iOS >= 6",
          "Opera >= 20",
          "Safari >= 6"
        ]
      },
      dist: {
        src: 'assets/css/global.css'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        advanced: false
      },
      dist: {
        src: 'assets/css/global.css',
        dest: 'assets/css/global.min.css'
      }
    },

    uglify: {
      dist: {
        files: {
          'assets/js/global.min.js': [
            '_assets/js/jquery.min.js',
            '_assets/js/bootstrap.min.js',
            '_assets/js/jquery.fancybox.pack.js',
            '_assets/js/jquery.mousewheel-3.0.6.pack.js',
            '_assets/js/featured_app.js',
            '_assets/js/sponsor.js',
            '_assets/js/thumbnails.js',
            '_assets/js/analytics.js'
          ]
        }
      }
    },

    watch: {
      less: {
        files: ['_assets/less/**/*.less'],
        tasks: ['style']
      },
      js: {
        files: ['_assets/js/**/*.js'],
        tasks: ['script']
      }
    },

    clean: {
      dist: [
        'assets/css/global.min.css',
        'assets/js/global.min.js'
      ]
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('style', ['less', 'autoprefixer', 'cssmin']);
  grunt.registerTask('script', ['uglify']);

  grunt.registerTask('default', ['clean', 'style', 'script']);
  grunt.registerTask('dev', ['watch']);

};
