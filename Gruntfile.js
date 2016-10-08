module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    typescript: {
      base: {
        src: ['typescript/papillon.ts','typescript/**/*.ts'],
        dest: 'static/js-gen',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          rootDir: 'typescript'
        }
      }
    },

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

    watch: {
      typescript: {
        files: ['typescript/**/*.ts'],
        tasks: ['typescript']
      },
      sass: {
        files: ['sass/*.sass', 'sass/*.scss', 'sass/**/*.sass', 'sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['typescript', 'sass']);

};
