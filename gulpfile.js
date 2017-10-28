var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var pump = require('pump');

//In order for tasks to work in sequence
//make sure the tasks return a stream or promise, or handle the callback

gulp.task('uglifycss', ['sass'], function() {
  return  gulp.src('css/**/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist'));
});

// The task that depends on uglifycss task and must be executed first
gulp.task('sass', function() {
      return   gulp.src('scss/**/*.scss')
        .pipe(sass()) 
        .pipe(gulp.dest('css'));   
});


gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['uglifycss']);
    gulp.watch('scripts/**/*.js', ['compressjs']);
});
 
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('compressjs', function (cb) {
  pump([
        gulp.src(['scripts/*.js']),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});


gulp.task('default', ['uglifycss','webserver','watch', 'compressjs']);

