const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
	return gulp.src('js/modules/RequestModule.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist/partials/'));
});