// vmn grunt sass toolkit
// includes sass, postcss and minifier
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // sass
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'scss',
          // src: ['**/*.scss'], // compiel all scss files
          src: ['*.scss'], // compile files only in root folder
          dest: 'assets/hygienecare/css',
          ext: '.css'
        }]
      }
    },
    // post css
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: ['assets/hygienecare/css/hygienecare.css']
      }
    },
    // css minify
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/hygienecare/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/hygienecare/css',
          ext: '.min.css'
        }]
      }
    },
    // watch for changes
    watch: {
      css: {
        files: 'scss/**/*.{scss,sass}',
        tasks: ['sass', 'postcss', 'cssmin']
      },
      dev: {
        files: 'scss/**/*.{scss,sass}',
        tasks: ['sass', 'postcss']
      }
    }
  });
  
  // load grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register grunt tasks
  grunt.registerTask('default', ['watch:css']);
  grunt.registerTask('watchCSS', ['watch:css']);
  grunt.registerTask('brewCSS', ['sass', 'postcss', 'cssmin']);
  grunt.registerTask('brewCSSAndWatch', ['sass', 'postcss', 'cssmin', 'watch:css']);
};