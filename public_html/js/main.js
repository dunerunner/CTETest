'use strict';
$(document).ready(function(){
    gameModule.init();
});

var gameModule = (function(){
    function fillGameArea() {
        $('.b-slot-item').each(function(element){
            var index = Math.floor(10 * Math.random()) + 1;
            index = index > 9 ? '' + index: '0' + index;
            var className = 's' + index;
            $(this).addClass(className);
        });
    }
    return {
        init:fillGameArea
    };
})();