const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const del = require('del');

const SCSS_SRC = './src/assets/src/scss/**/*.scss';
const SCSS_DEST = './src/assets/dest/css';

gulp.task('compile_scss', () => {
    return gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});


gulp.task('watch_scss', () => {
    return gulp.watch(SCSS_SRC,  gulp.series('compile_scss'))
});

gulp.task('clean', () => {
    return del([
        SCSS_DEST,
    ]);
});

gulp.task('default', gulp.series('watch_scss'));