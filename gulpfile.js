const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const uglify=require('gulp-uglify')


gulp.task('less', () => {
    return gulp.src('./src/*.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('babel', () => {
    return gulp.src('./src/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', () => {
    gulp.watch('./src/*.less', gulp.series('less'));
    gulp.watch('./src/*.js', gulp.series('babel'));
});

gulp.task('default', gulp.series('less', 'babel', 'watch'));
