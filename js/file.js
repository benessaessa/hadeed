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
    // $(".changeLogo").addA
    $('.navbar .navbar-brand img').attr('src','images/Artboardcopy5.png');
    $('.navbar .brandShop img').attr('src','images/hadid-logo-black.svg');
    $('.navbar-nav .nav-item .nav-link img:first').attr('src','images/language-black.svg');
    $('.navbar-nav .nav-item .nav-link .imgShop').attr('src','images/shoping-red.png');
    $('.nav-link').css("color","black");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
    $('.navbar .navbar-brand img').attr('src','images/had1.png');
    $('.navbar .brandShop img').attr('src','images/ad.png');
    $('.navbar-nav .nav-item .nav-link img:first').attr('src','images/language.svg');
    $('.navbar-nav .nav-item .nav-link .languageBlack').attr('src','images/language-black.svg');
    $('.navbar-nav .nav-item .nav-link .imgShop').attr('src','images/shoping.png');
    $('.nav-link').css("color","white");
    }
});