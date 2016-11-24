var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var config      = require('./config.json');

gulp.task('serve', ['css-auto-prefixer'], function() {
    browserSync.init(config.browserSync);
    gulp.watch(config.css.src, ['inject-css']);
    gulp.watch(config.js.src, ['browser-reload']);
    gulp.watch(config.html.src, ['browser-reload']);
});

gulp.task('css-auto-prefixer', function () {
    return gulp.src(config.css.src)
        .pipe(postcss([ autoprefixer({ browsers: ['ie > 11', '> 5%'] }) ]))
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('inject-css', ['css-auto-prefixer'], function() {
	return gulp.src(config.css.src)
		.pipe(browserSync.stream());
});

gulp.task('browser-reload', function() {
	browserSync.reload();
});
