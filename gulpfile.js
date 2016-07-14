var gulp     = require('gulp'),
    sass     = require('gulp-sass'),
    imagemin = require('gulp-imagemin');


/* sass */
gulp.task('sass', function(){
  gulp.src('assets/sass/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('assets/css'));
});


/* imagemin */
gulp.task('imagemin', function(){
  gulp.src('assets/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('assets/img'));
});


/* watch */
gulp.task('watch', function(){
  gulp.watch('assets/sass/*.sass', ['sass']);
});


/* default */
gulp.task('default', ['watch']);
