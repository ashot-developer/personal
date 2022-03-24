import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from 'gulp-rename'
import autoPrefixer from "gulp-autoprefixer";

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(autoPrefixer({
        overrideBrowserslist: ["last 3 versions"],
    }))
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};
