'use strick';

module.exports = function() {
    $.gulp.task('sprite:png', function() {
        var spriteData = $.gulp.src('./source/sprite/*.{png,gif}') //берем все файлы с расширением png и gif
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png', // итоговый спрайт
                algorithm: 'top-down',
                padding: 15,
                cssName: 'sprite-png.scss',  // файл стилей
                cssFormat: 'css'
            }));

        spriteData.img
            .pipe($.gulp.dest($.config.root + '/assets/img')); // путь куда записываем спрайт

        spriteData.css
            .pipe($.gulp.dest('./source/style/common/'));  // путь куда записываем файл стилей для спрайта

        return spriteData;
    })
};

