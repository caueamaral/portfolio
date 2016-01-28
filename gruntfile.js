module.exports = function(grunt){
  'use strict';

  var config;

  config = {
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'img/'
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
  grunt.registerTask('panda', ['imagemin']);
};