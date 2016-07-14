var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('assets/sass/layout.sass')
  .pipe(sass())
  .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function(){
  gulp.watch('assets/sass/*.sass', ['sass']);
});

gulp.task('default', ['watch']);
