// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
    del = require('del'),
    vinylPaths = require('vinyl-paths');


//Delete .gitkeep files
gulp.task('clean:gitkeep', function() {
  return gulp.src([paths.dev.main + '/**/.gitkeep', paths.build.main + '/**/.gitkeep'], { read: false })
    .pipe(vinylPaths(del));
});
gulp.task('clean:debug', function() {
  return gulp.src([paths.build.js + '/**/*.js', '!' + paths.build.js + '/**/*.min.js',
                   paths.build.css + '/**/*.css', '!' + paths.build.css + '/**/*.min.css'], { read: false })
    .pipe(vinylPaths(del));
});
