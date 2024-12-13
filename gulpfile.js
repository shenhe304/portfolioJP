// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));
const watch = require('gulp-watch');

// ソースファイルのパス
const srcFiles = [
  'sass/**/*.scss',
  'another-folder/**/*.scss',
];

// style.scssの監視タスクを作成する
gulp.task('watch', function()
{   
    watch(['./index.html', './sass/**/*.scss'], function()
    {
        console.log('Hello from watch');
    });
});

// デフォルトのタスクを定義
gulp.task('default', function() {
  // style.scssファイルを取得
  return (
    gulp
      .src("./gulp_src/scss/style.scss")
      // Sassのコンパイルを実行
      .pipe(
        sass({
          outputStyle: "compressed",
        })
        // Sassのコンパイルエラーを表示
        // (これがないと自動的に止まってしまう)
        .on("error", sass.logError)
      )
      // cssフォルダー以下に保存
      .pipe(gulp.dest("./assets/css"))
  );
});
