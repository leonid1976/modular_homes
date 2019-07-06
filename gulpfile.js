'use strict';

  var gulp = require('gulp'),
  watch = require('gulp-watch'),
  prefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  rigger = require('gulp-rigger'),       
  cleanCSS = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  rimraf = require('rimraf'),
  browserSync = require("browser-sync"),
  reload = browserSync.reload,
  mainFiles = require('main-files');
  

var path = {
    vendor: {
        js: 'app/js/',
        css: 'app/css/'
    },
    dist: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        js: 'dist/js/',
        scss: 'dist/css/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    app: { //Пути откуда брать исходники
        html: 'app/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'app/js/*.js',//В стилях и скриптах нам понадобятся только main файлы
        scss: 'app/css/*.scss',
        css: 'app/css/*.css',
        img: 'app/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'app/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'app/**/*.html',
        js: 'app/js/**/*.js',
        scss: 'app/css/**/*.scss',
        css: 'app/css/**/*.css',
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    clean: './dist'
};

var config = {
    server: {
        port: 9000,
        baseDir: "./dist"
    },
  ui: {
    port: 3001
},
    //browser: "Firefox Developer Edition"  

 //   tunnel: true,
  //  host: 'localhost',
//    port: 8081,
//    logPrefix: "LG"
};

//    server: {
//      port: 9000,
//      baseDir: "build" }


/*
gulp.task('vendorJs:build', function (done) {
    gulp.src( mainFiles() ) 
        .pipe(gulp.dest(path.vendor.js)) 
        done();
});

gulp.task('vendorCss:build', function (done) {
    gulp.src( mainFiles() ) 
        .pipe(gulp.dest(path.vendor.css)) 
      done();
});


*/

gulp.task('html:build', function (done) {
    gulp.src(path.app.html) //Выберем файлы по нужному пути
        .pipe(rigger())
        .pipe(gulp.dest(path.dist.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
        done();
});

gulp.task('js:build', function (done) {
    gulp.src(path.app.js) //Найдем наш main файл
        .pipe(gulp.dest(path.dist.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
        done();
});

gulp.task('scss:build', function (done) {
    gulp.src(path.app.scss) //Выберем наш main.scss
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(gulp.dest(path.dist.scss)) //И в build
        .pipe(reload({stream: true}));
        done();
});

gulp.task('css:build', function (done) {
    gulp.src(path.app.css) //Выберем наш main.css
        .pipe(gulp.dest(path.dist.css)) //И в build
        .pipe(reload({stream: true}));
        done();
});

gulp.task('image:build', function (done) {
    gulp.src(path.app.img) //Выберем наши картинки
        .pipe(gulp.dest(path.dist.img)) //И бросим в build
        .pipe(reload({stream: true}));
           done();
});

gulp.task('fonts:build', function(done) {
    gulp.src(path.app.fonts)
        .pipe(gulp.dest(path.dist.fonts))
        done();
});




gulp.task('css:clean', function(done) {
  gulp.src(path.app.css)
  .pipe(sourcemaps.init())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('final/css'))
  done();
})

gulp.task('scss:clean', function(done) {
  gulp.src(path.app.scss)
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(prefixer())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('final/css'))
  done();
})

gulp.task('js:uglify', function(done) {
  gulp.src(path.app.js)
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('final/js'))
  done();
})

gulp.task('image:clean', function (done) {
    gulp.src(path.app.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('final/img')) //И бросим в build
        done()
});

gulp.task('final', gulp.parallel('css:clean', 'scss:clean',
  'js:uglify', 'image:clean'));




gulp.task('build', gulp.parallel(
    'html:build',
    'js:build',
    'scss:build',
    'css:build',
    'fonts:build',
    'image:build')
);

gulp.task('watch', function(){
    gulp.watch(path.watch.html, 
        gulp.series('html:build')
    );
    gulp.watch(path.watch.scss, 
        gulp.series('scss:build')
    );
    gulp.watch(path.watch.css, 
        gulp.series('css:build')
    );
    gulp.watch(path.watch.js, 
        gulp.series('js:build')
    );
    gulp.watch(path.watch.img, 
        gulp.series('image:build')
    );
    gulp.watch(path.watch.fonts, 
        gulp.series('fonts:build')
    );

});

gulp.task('webserver', function () {
    browserSync(config);
});


gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});




gulp.task('default', gulp.series('clean', 'build',
    gulp.parallel('webserver', 'watch'))
);