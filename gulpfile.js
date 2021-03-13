var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compress', function () {
  return gulp.src('focustype.js')
    .pipe(uglify({
      mangle: true,
      output: {
        comments: /^!/
      }
    }))
    .pipe(gulp.dest('dist/'))
});