'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

var scss = require("gulp-scss");

gulp.task('sass', function () {
    gulp.src('./src/application/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dist/sass'));
});


 gulp.task("scss", function () {
        gulp.src(
            "./src/application/**/*.scss"
        ).pipe(scss(
            {"bundleExec": true}
        )).pipe(gulp.dest('./dist/scss'));
    });
 