(function ($) {
    $.fn.longDialog = function (options) {
        var openButton = options.openButton,
            dialog = $(this),
            main = options.mainContainer,
            body = $("body"),
            html = $("html");

        
        openButton.click(function (e) {
            main.css("width", main.width() + "px");
            body.css("overflow", "hidden");
            var bst = body.scrollTop(),
                hst = html.scrollTop();
            dialog.css("top", bst !== 0 ? bst + "px" : (hst !== 0 ? hst + "px" : ""));
            dialog.fadeIn("fast", function () {
                $(this).attr("tabindex", "-1").focus();
            });
            e.preventDefault();
        });
        
        dialog.click(function () {
            $(this).fadeOut("fast", function () {
                body.css("overflow", "");
                main.css("width", "");
                dialog.css("top", "");
                $(this).attr("tabindex", "");
            });
        });
        
        dialog.find(".dialog").click(function (e) {
            e.stopPropagation();
        });
    };
})(jQuery);
