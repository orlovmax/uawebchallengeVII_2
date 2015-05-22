// Include gulp
var gulp = require('gulp'),
	paths = require('../paths');


// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch(paths.dev.js + '/**/*.js', ['concat:changed', 'copy:js:changed']);
	gulp.watch(paths.dev.styles + '/**/*.sass', ['sass:changed']);
	gulp.watch(paths.dev.css + '/**/*.css', ['copy:css:changed']);
	gulp.watch(paths.dev.templates + '/pages/**/*.jade', ['jade:changed']);
	gulp.watch(paths.dev.html + '/**/*.html', ['copy:html:changed']);
	gulp.watch(paths.dev.img + '/**/*.{png,jpg,gif}', ['imagemin:changed']);
	gulp.watch(paths.dev.fonts + '/**/*.*', ['copy:fonts:changed']);
	gulp.watch(paths.dev.helpers + '/**/*.*', ['copy:helpers:changed']);
});
