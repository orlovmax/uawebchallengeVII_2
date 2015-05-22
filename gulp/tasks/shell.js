// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
    shell = require('gulp-shell');


// Run deploy script from Rakefile
gulp.task('shell:deploy-all', function () {
  return gulp.src('', {read: false})
    .pipe(shell([
      'rake deploy'
    ]));
});

gulp.task('shell:deploy-build', function () {
  return gulp.src('', {read: false})
    .pipe(shell([
      'rake buildDeploy'
    ]));
});
