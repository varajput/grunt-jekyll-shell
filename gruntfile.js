 module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    	shell: {
	    	jekyll: {
				command: 'jekyll build',
				//command: 'jekyll serve'
			},
    	},
    	watch: {
    		options: {
    			livereload: true,
    		},
    		css: {
    			files: ['**/*.css'],
    			tasks:[],
    		}
    	},
    	jekyll: {
    		dev: {

    		}
    	}
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-livereload');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');

// jekyll build using grunt-shell plugin
  grunt.registerTask('default', ['shell:jekyll']);

// jekyll build using grunt-jekyll plugin
  //grunt.registerTask('default', ['jekyll:dev']);

// Watch CSS change plugin
  //grunt.registerTask('default', ['watch:css']);
  

};