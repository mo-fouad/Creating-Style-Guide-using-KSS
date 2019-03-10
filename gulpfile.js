var gulp = require('gulp');
var sass = require('gulp-sass');


// Style guide run task for creating files
gulp.task('kss', shell.task(['./node_modules/.bin/kss --config kss-config.json']));

gulp.task('kss:watch',function () {
    gulp.watch(['assets/scss/**/*.scss','assets/scss/*.scss'], ['kss']);
});


gulp.task('css:dev', ['css:clean'], function () {
    return gulp.src(['old_assets/css/*.scss','assets/scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('www/assets/css'))
        ;
});

