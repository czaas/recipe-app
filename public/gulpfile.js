var gulp = require('gulp'),
	bs = require('browser-sync'),
	reload = bs.reload,
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	cssMinify = require('gulp-minify-css');


gulp.task('html', function(){
	var htmlFolders = ['./*.html', './views/*.html'];

	gulp.src(htmlFolders, { base: './' })
	.pipe(gulp.dest('./min'))
	.pipe(reload({ stream: true }));
});

gulp.task('js', function(){
	var jsFiles = ['./js/**/*.js'];

	gulp.src(jsFiles)
	.pipe(uglify())
	.pipe(gulp.dest('./min/js'))
	.pipe(reload({ stream: true }));
});

gulp.task('scss', function(){
	var scssFiles = ['./css/*.scss'];

	gulp.src(scssFiles)
	.pipe(sass().on('error', sass.logError))
	.pipe(cssMinify())
	.pipe(gulp.dest('./min/css'))
	.pipe(reload({ stream: true }));
});

gulp.task('watch', function(){
	bs.init({
		server: {
			baseDir: './min',
			middleware: function(req, res, next){
				res.setHeader('Access-Control-Allow-Origin', '*');
				next();
			}
		}
	});

	gulp.watch(['./*.html', './views/*.html'], ['html']);
	gulp.watch(['./js/*.js', './js/**/*.js'], ['js']);
	gulp.watch(['./css/*.scss'], ['scss']);
});

gulp.task('default', ['watch']);