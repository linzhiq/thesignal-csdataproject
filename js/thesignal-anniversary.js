// Author: Qi Linzhi (qi@qlz.io)
// Date: May. 9, 2018

$(document).ready(function () {
    $('.ui.sticky').sticky({
            context: "#content"
        }
    );

    $('.right.menu .item').click(function (e) {
        $('.menu .item').toggleClass('active', false);
        $(this).toggleClass('active');

        $('.school').hide();
        $('#' + $(this).data('school')).show();

        $('#' + $(this).data('school')+' iframe').attr("src", $('#' + $(this).data('school')+' iframe').attr("src"));
    });
});