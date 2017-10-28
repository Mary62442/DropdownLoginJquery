var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var pump = require('pump');
var runSequence = require('run-sequence');


gulp.task('buildcss', function (cb){
runSequence ( 'sass', 'uglifycss', cb);
});

//In order for run-sequence to work properly
//make sure they either return a stream or promise, or handle the callback

gulp.task('sass', function () {
   return  gulp.src('scss/**/*.scss')
        .pipe(sass()) 
        .pipe(gulp.dest('css'));
});

gulp.task('uglifycss', function () {
return  gulp.src('css/**/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['buildcss']);
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


gulp.task('default', ['buildcss','webserver','watch', 'compressjs']);

