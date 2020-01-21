var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    // spaceBetween: 15,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    breakpoints: {
        // when window width is <= 499px
        320: {
            slidesPerView: 1,
            spaceBetweenSlides: 20
        },
        700:{
            slidesPerView: 2,
            spaceBetweenSlides: 50
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 5,
            spaceBetweenSlides: 15
        }
    }
    });
$(window).on("scroll", function() {
if($(window).scrollTop() > 20) {
    $(".header").addClass("active");
    // $(".changeLogo").addA
    $('.navbar .navbar-brand img').attr('src','images/Artboardcopy5.png');
    $('.navbar .brandShop img').attr('src','images/hadid-logo-black.svg');
    $('.navbar-nav .nav-item .nav-link img:first').attr('src','images/language-black.svg');
    $('.navbar-nav .nav-item .nav-link .imgShop').attr('src','images/ArtboardRed.png');
    $('.navbar').css("box-shadow","0px 0px 6px 0 rgba(3,3,3,1)");
    $('.nav-link').css("color","black");
    } 
    else if(window.innerWidth <= 780){
        $('.navbar').css("background-color","white");
        $('.nav-link').css("color","black");
        $('.navbar-brand img').attr('src','images/Artboardcopy5.png');
        $('.navbar-nav .nav-item .nav-link img:first').attr('src','images/language-black.svg');
        $('.navbar-nav .nav-item .nav-link .imgShop').attr('src','images/ArtboardRed.png');
    }
    else {
        //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
    $('.navbar .navbar-brand img').attr('src','images/had1.png');
    $('.navbar .brandShop img').attr('src','images/ad.png');
    $('.navbar-nav .nav-item .nav-link img:first').attr('src','images/language.svg');
    $('.navbar-nav .nav-item .nav-link .languageBlack').attr('src','images/language-black.svg');
    $('.navbar-nav .nav-item .nav-link .imgShop').attr('src','images/Artboardwhite.png');
    $('.nav-link').css("color","white");
    $('.navbar').css("box-shadow","none");
    }
});
$(document).ready(function(){
    if(window.innerWidth <= 780){
        $('.navbar').css("background-color","white");
        $('.nav-link').css("color","black");
        $('.navbar-brand img').attr('src','images/Artboardcopy5.png');
        $('.navbar-nav .nav-item .nav-link img:first').attr('src','images/language-black.svg');
        $('.navbar-nav .nav-item .nav-link .imgShop').attr('src','images/ArtboardRed.png');
    }
});