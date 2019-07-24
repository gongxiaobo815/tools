/**
 * Created on 2018/2/1.
 */

require(['gitbook', 'jQuery'], function(gitbook, $) {
    var EXPANDED_CLASSNAME = 'expanded',
        CHAPTER = '.chapter',
        SUMMARY = '.summary';
    var init = function () {
        exspandAll();
    };

    var exspandAll = function(){
        $(SUMMARY + ' >' + CHAPTER).addClass(EXPANDED_CLASSNAME);
        $(SUMMARY + ' >' + CHAPTER +' .articles >li >a').attr('target','_self')
    };


    gitbook.events.bind('page.change', function() {
        init();
        $(CHAPTER+' >span').on('click',function () {

            var path = $(this).parent().data('path');
            console.log(path);
            window.location.href=path;
        })
    });
});