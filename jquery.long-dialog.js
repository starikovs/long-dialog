(function ($) {
    $.fn.longDialog = function (options) {
        var openButton = options.openButton,
            dialog = options.dialog;
        
        openButton.click(function (e) {
            dialog.fadeIn();
            e.preventDefault();
        });
        
        dialog.click(function () {
            $(this).fadeOut();
        });
        
        dialog.find(".dialog").click(function (e) {
            e.stopPropagation();
        });        
    };
})(jQuery);
