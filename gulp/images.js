import gulp from "gulp";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

import { Path } from "./_const.js";

export const images = gulp.parallel(imageMinify, webpCopy);

function webpCopy() {
	return gulp
		.src(Path.IMAGE.source + ".{gif,png,jpg}")
		.pipe(webp({ quality: 80 }))
		.pipe(gulp.dest(Path.IMAGE.build));
}

function imageMinify() {
	return gulp
		.src(Path.IMAGE.source + ".{gif,png,jpg,svg}")
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({
					quality: 90,
					progressive: true,
				}),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
				}),
			])
		)
		.pipe(gulp.dest(Path.IMAGE.build));
}
