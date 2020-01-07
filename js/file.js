var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
$(window).on("scroll", function() {
if($(window).scrollTop() > 20) {
    $(".header").addClass("active");
} else {
    //remove the background property so it comes transparent again (defined in your css)
$(".header").removeClass("active");
}
});