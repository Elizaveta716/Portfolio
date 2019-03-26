$(".main-img").hover(function () {
    $(this).hide();
    $(".cat-img").css("display", "block")
});

$(".cat-img").mouseleave(function () {
    $(this).hide();
    $(".main-img").show();
});
