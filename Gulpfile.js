const del = require('del');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const isDev = process.env.NODE_ENV === 'development';
const isPro = process.env.NODE_ENV === 'production';






gulp.task('dedault', gulp.series([''], (done)=>{
  
  done();
}))