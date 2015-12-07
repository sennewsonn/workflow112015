var gulp = require("gulp"),
<<<<<<< HEAD
browserSync = require('browser-sync');

gulp.task('server', function() {
browserSync({
port: 9000,
server: {
baseDir: 'app'
}
});
});

gulp.task('watch', function () {
gulp.watch([
'app/*.html',
'app/js/**/*.js',
'app/css/**/*.css'
]).on('change', browserSync.reload);
=======
	browserSync = require('browser-sync');

	gulp.task('server', function() {
		browserSync({
			port: 9000,
			server: {
				baseDir: 'app'
			}
		});
	});

gulp.task('watch', function () {
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
	]).on('change', browserSync.reload);
>>>>>>> 7d62c72cebd1539443546865cbaffe24bd870d8c
});

gulp.task('default', ['server', 'watch']);