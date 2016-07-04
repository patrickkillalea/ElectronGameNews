'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var DEST = './';

gulp.task('default', function() {
  return gulp.src(['./src/buffer.js','./src/jsonparse.js','./src/jsonparsearray.js'])
    .pipe(concat('./browser/jsonparsearray.js'))
    // This will output the non-minified version
    .pipe(gulp.dest(DEST))
    // This will minify and rename to foo.min.js
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});
