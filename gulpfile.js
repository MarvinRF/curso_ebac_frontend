const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function comprimeImagens() {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/js'))
}

function compilaSass() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/css/styles'))
}

exports.default = function () { 
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass)); 
    gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript)); 
    gulp.watch('src/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens)); 
}