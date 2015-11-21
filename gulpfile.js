const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const jasmine = require('gulp-jasmine');



gulp.task('build', function() {
    return browserify({
            entries: 'js/bil.js',
            extensions: ['.js'],
            debug: true
        })
            .transform('babelify', {presets: ['es2015']})
            .bundle()
            .on('error', function(err) {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.js', ['build']);
});

gulp.task('tests', function() {
    var filesForTest = ['dist/bundle.js', 'spec/modules/*.spec.js'];
    return gulp.src(filesForTest)
        .pipe(jasmine());
});