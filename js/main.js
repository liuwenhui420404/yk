require.config({
    baseUrl: './js/lib',
    paths: {
        'jquery': 'jquery-1.8.3.min',
        'hand': 'handlebars-v4.0.11'
    }
})
require(['jquery', 'hand'], function($, Handlebars) {
    var tpl = $('#tpl').html();
    var template = Handlebars.compile(tpl); //获取template方法
    var obj = {
        arr: ['首页', '推荐', '新闻', '我的']
    }
    var html = template(obj);
    $('body').html(html)
})