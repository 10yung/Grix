var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('grix', function(){
    gulp.src('sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function(){
    gulp.watch('./sass/**/*.scss',['grix']);
});

gulp.task('minicss', function() {
    return gulp.src('./dist/style/grix.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/style/'));
});
