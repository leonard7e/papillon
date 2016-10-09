module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          cacheLocation: '/tmp/papillon/sass-cache',
          sourcemap: 'none',
          require: [
            './sass/papillon.rb',
          ]
        },
        files: {
          'static/css-gen/papillon.css': 'sass/papillon.sass'
        }
      }
    },

    copy: {
      angular:
        {
          cwd: 'node_modules/angular/',
          src: 'angular.min.js',
          dest: 'static/js-gen/',
          expand: 'true'
        }
    },

    watch: {
      sass: {
        files: ['sass/*.sass', 'sass/*.scss', 'sass/**/*.sass', 'sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
