var gulp = require('gulp'),
  gutil = require('gulp-util'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCss = require('gulp-minify-css'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade'),
  liveReaload = require('gulp-livereload'),
  svgMin = require('gulp-svgmin'),
  svgStore = require('gulp-svgstore'),
  coffee = require('gulp-coffee'),
  coffeeLint = require('gulp-coffeelint');

gulp.task('default', ['watch']);

gulp.task('sass', function(){
  return gulp.src('src/sass/*.sass')
    .pipe(sass())
    .pipe(autoprefixer())
    // .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('jade', function(){
  return gulp.src('src/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/'));
});

gulp.task('svg', function(){
  return gulp.src('src/icons/*.svg')
    .pipe(svgMin())
    .pipe(svgStore())
    .pipe(gulp.dest('src/icons/'));
})

gulp.task('js', function(){
  return gulp.src('src/coffee/*.coffee')
    .pipe(coffeeLint())
    .pipe(coffee())
    .pipe(gulp.dest('dist/js/'));
})

gulp.task('watch', function(){
  gulp.watch('src/sass/*.sass', ['sass']);
  gulp.watch('src/*.jade', ['jade']);
  gulp.watch('src/coffee/*.coffee', ['js']);
});
