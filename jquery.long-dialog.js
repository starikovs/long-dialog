(function ($) {
    $.fn.longDialog = function (options) {
        var openButton = options.openButton,
            dialog = $(this);
        
        openButton.click(function (e) {
            dialog.fadeIn("fast", function () {
                $(this).attr("tabindex", "0").focus();
            });
            e.preventDefault();
        });
        
        dialog.click(function () {
            $(this).fadeOut("fast", function () {
                $(this).attr("tabindex", "");
            });
        });
        
        dialog.find(".dialog").click(function (e) {
            e.stopPropagation();
        });
    };
})(jQuery);


