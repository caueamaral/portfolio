module.exports = function(grunt){
  'use strict';

  var config;

  config = {
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/img/'
        }]
      }
    }
  };

  // Init Grunt
  grunt.initConfig(config);

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register tasks
  grunt.registerTask('default', []);
  // grunt.registerTask('padrao', ['padrao']);
};