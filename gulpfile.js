var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);   
});
 
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


gulp.task('default', ['sass','webserver','watch']);

