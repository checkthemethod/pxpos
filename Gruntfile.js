module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'dist/css/styles.css': 'src/sass/styles.scss'
	            }
	        }
	    },
	    cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'dist/css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'dist/css',
		      ext: '.min.css'
		    }]
		  }
		}
	});


	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['sass', 'cssmin']);

}