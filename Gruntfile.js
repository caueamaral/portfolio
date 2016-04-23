module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
  		// watch
  		watch: {
    		sass: {
      			files: ['sass/*.sass'],
      			tasks: ['sass']
    		}
  		},
    	// sass
		sass: {
			'build': {
				'options': {
					'trace': true,
					'style': 'compressed'
				},
				'files': [{
					'expand': true,
					'cwd': 'sass',
					'src': ['*.sass'],
					'dest': 'css',
					'ext': '.css'
				}]
			}
		},
		// concat
		concat: {
	  		options: {
	    		separator: ';',
	    		stripBanners: true
	  		},
	  		dist: {
	    		src: ['css/layout.css'],
	    		dest: 'css/estilos.min.css',
	  		}
		}
	});

	// Load Tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Register tasks
	grunt.registerTask('default', ['watch']);
};