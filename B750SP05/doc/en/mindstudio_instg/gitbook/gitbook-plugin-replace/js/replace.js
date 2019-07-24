//添加代码的复制功能
require(['gitbook', 'jQuery'], function(gitbook, $) {
    gitbook.events.bind('page.change', function() {
        var str = $(".markdown-section> h1").text();
        var left = str.replace("（","(");
        var right =left.replace("）",")");
        $(".markdown-section> h1").text(right);
    });
});

