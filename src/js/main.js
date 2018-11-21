$(document).ready(function () {


        "use strict";

        $(".carousel-item").on('click', function () {
            var src = $(this).find('img').attr('src');
            var title = $(this).find('h3').text();
            $("#modalImg").find('img').attr('src', src);
            $("#modalImg").find('h3').text(title);
        });
});