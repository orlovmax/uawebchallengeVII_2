// Include gulp
var gulp = require('gulp'),
	runSequence = require('run-sequence');


// Bower dev task
gulp.task('bower-dev', function() {
	runSequence('bower-copy:vendor',
				'bower-copy:ie',
				'bower-copy:module');
});

// Default Task
gulp.task('default', function() {
	runSequence('concat:changed',
		'sass:changed',
		'jade:changed',
		'imagemin:changed',
		'copy:fonts:changed',
		'copy:js:changed',
		'copy:livejs:changed',
		'copy:css:changed',
		'copy:html:changed',
		'copy:helpers:changed',
		'watch');
});

// Regenerate project
gulp.task('regen', function() {
	runSequence('concat',
				'sass',
				'jade',
				'copy:fonts',
				'copy:js',
				'copy:livejs',
				'copy:css',
				'copy:html',
				'copy:helpers');
});

// Build task
gulp.task('build', function() {
	runSequence('processhtml',
		'cmq',
		'autoprefixer',
		'minify-css',
		'htmlmin',
		'uglify',
		'clean:debug');
});

// Deploy task
gulp.task('deploy', ['shell:deploy-all']);
gulp.task('build-deploy', ['shell:deploy-build']);

// Compress result into *.zip archive
gulp.task('zip-all', ['compress:all']);
