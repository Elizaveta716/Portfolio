$(".main-img").hover(function () {
    $(this).hide();
    $(".cat-wink").css("display", "block")
});

$(".cat-wink").mouseleave(function () {
    $(this).hide();
    $(".main-img").show();
});
