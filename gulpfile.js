var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

console.log('Gulpfile is loaded');

// Global settings for Gulp
var settings = {
  scriptsFolder: 'scripts/',
  distFolder: 'dist/'
};

// Watch for changes
watch([settings.scriptsFolder  + '*.js'], function () {
  console.log('ohh snappp scripts have been changed!! Lets rebundle!');
  gulp.start('default');
});

// Default Gulp task
gulp.task('default', function () {
  return gulp.src([settings.scriptsFolder + 'lib/jquery-2.1.4.js', settings.scriptsFolder + 'app/*.js'])
  .pipe(concat('distribution-app.js'))
  // .pipe(uglify()) //Comment out uglify for debugging OR development
  .pipe(gulp.dest(settings.distFolder));
});
