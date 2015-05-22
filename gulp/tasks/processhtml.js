// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
    processhtml = require('gulp-processhtml');


//Delete some dev code and references from files
gulp.task('processhtml', function() {
  return gulp.src(paths.dev.html + '/**/*.html')
    .pipe(processhtml())
    .pipe(gulp.dest(paths.dev.html));
});
