const gulp = require('gulp');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const htmlmin = require('gulp-htmlmin');


/***************************************************/
/*Originators are herre*/
/**************************************************/

gulp.task('webserver', function(){
  gulp.src('dist')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      open: true,
      fallback: 'hello.html',
    }));
});

gulp.task('pug', function(){
  gulp.src('src/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist'))
});

gulp.task('sass', function(){
  var plugins = [
    autoprefixer(),
    cssnano(),
  ];
  gulp.src('src/sass/*.sass')
  .pipe(sass())
  .pipe(postcss(plugins))
  .pipe(gulp.dest('dist/css'))
});


/**************************************************/
/*watch squad*/
/**************************************************/

gulp.task('watch-pug', function(){
  gulp.watch('src/*.pug',['pug'])
});

gulp.task('watch-sass',function(){
  gulp.watch('src/sass/*.sass',['sass'])
});

/**************************************************/
/*default*/
/**************************************************/

gulp.task('default',['pug','sass','watch-pug','watch-sass']);
