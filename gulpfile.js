const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('build', () => {
    browserify({
        entries: 'js/test.js',
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