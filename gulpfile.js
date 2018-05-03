var gulp = require('gulp'),
    webserver = require('gulp-webserver');
gulp.task('default', function() {
    gulp.src('.').pipe(webserver({
        host: 'localhost',
        port: 9898
    }))
})