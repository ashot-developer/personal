import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp
    .src(app.path.src.images, {allowEmpty: true})
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.build.images, {allowEmpty: true}))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimiztionlevel: 3
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg, {allowEmpty: true}))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
