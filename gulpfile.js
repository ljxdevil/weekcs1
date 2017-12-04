var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('server', function() {
    gulp.src('.')
        .pipe(webserver({
            port: 8880,
            host: 'localhost',
            fallback: 'index.html',
            open: true,
            livereload: true
        }))
});
gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            port: 8889,
            host: 'localhost',
            middleware: function(req, res, next) {
                res.writeHead(200, {
                    'Access-Control-Allow-Origin': '*'
                });
                // console.log(req.url)
                if (req.url === '/data') {
                    var data = [{
                        src: './App/Content/images/图片1_03.jpg',
                        h3: '百度',
                        address: '北京市海淀区西北旺',
                        p1: '互联网',
                        who: '前端工程师',
                        num: 1232
                    }, {
                        src: './App/Content/images/图片1_06.jpg',
                        h3: '百度',
                        address: '北京市海淀区西北旺',
                        p1: '互联网',
                        who: '前端开发工程师',
                        num: 1232
                    }, {
                        src: './App/Content/images/图片1_08.jpg',
                        h3: '百度',
                        address: '北京市海淀区西北旺',
                        p1: '互联网',
                        who: 'web前端工程师',
                        num: 1232
                    }, {
                        src: './App/Content/images/图片1_10.jpg',
                        h3: '百度',
                        address: '北京市海淀区西北旺',
                        p1: '互联网',
                        who: '前端工程师',
                        num: 1232
                    }];
                    res.end(JSON.stringify(data))
                }
            }
        }))
});
gulp.task('default', ['server', 'webserver']);