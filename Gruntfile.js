// Gruntfile.js
module.exports = function(grunt) {
	grunt.initConfig({
		phpunit: {
			classes: {
				dir: 'tests/'
			},
			options: {
				colors: true,
				bin: "vendor/bin/phpunit"
			}
		},
		watch: {
			test: {
				files: ['public/**/*.*','tests/**/*.*'],
				tasks: ['phpunit']
			}
		}
	});
	 
	grunt.registerTask('default',[
		'watch'
	]);
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-phpunit');
};