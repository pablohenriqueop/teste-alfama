var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    rename        = require('gulp-rename'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify');
 
gulp.task('styles', function () {
  return gulp.src(['node_modules/bootstrap/**/*.scss', 'src/sass/main.scss'])
  .pipe(sourcemaps.init())
  .pipe(sass({
    errLogToConsole: true,
    outputStyle: 'expanded' // compiles SASS to CSS
  }))
  .pipe(autoprefixer({
    browsers: [ // https://github.com/ai/browserslist#queries
      'last 2 versions', 
      '> 5%', 
      'Firefox ESR'
    ]
  }))
  .pipe(rename('style.min.css')) // not yet minified at this point, just compiled [optional]
  .pipe(gulp.dest('src/sass/')) // tells task which directory to output compiled CSS [optional]
  .pipe(sass({
    errLogToConsole: true,
    outputStyle: 'compressed' // minifies style.min.css
  }))
  .pipe(sourcemaps.write('/', { // write style.min.css.map to same directory as style.min.css
    includeContent: false,
    sourceRoot: '../../src/sass' // relative to minified output location
  }))
  .pipe(gulp.dest('assets/css/')) // tells task which directory to output minified CSS
});

gulp.task('scripts', function(){
  return gulp.src([ // The order that you list the files in this array IS IMPORTANT!!
      'src/js/libs/jquery/jquery.js',
      'src/js/**/*.js',
      'src/js/main.js',
    ])
  .pipe(concat('scripts.min.js')) // concatenates the JS files listed above into one file called scripts.min.js
  .pipe(uglify({
      output: {
          comments: /^\!/ // keep comments that start with "/*!"
      }
  })) // minifies scripts.min.js
  .pipe(gulp.dest('assets/js/')) // tells task which directory to outputs uglified (minified) scripts.min.js
});

gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', gulp.series('styles')); // Watch the sass files for changes
    gulp.watch('src/js/**.*', gulp.series('scripts')); // Watch the JS files for changes
    gulp.watch('src/js/**/*.js', gulp.series('scripts'));
});

