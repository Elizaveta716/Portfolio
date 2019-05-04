$(".main-img").hover(function () {
    $(this).hide();
    $(".cat-wink").css("display", "block")
});

$(".cat-wink").mouseleave(function () {
    $(this).hide();
    $(".main-img").show();
});

$(".cat-head").hover(function () {
    $(this).hide();
    $(".cat-wink-footer").css("display", "block")
});

$(".cat-wink-footer").mouseleave(function () {
    $(this).hide();
    $(".cat-head").show();
});
