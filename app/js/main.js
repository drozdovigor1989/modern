$(function () {

    

    $('.product__slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
    })


    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
    });

$('.menu__btn').on('click', function(){
$('.menu__list').slideToggle()
})

$('.header__btn-menu').on('click', function (){
    $('.header-box').toggleClass('active')
    $('.header__top-logo').toggleClass('logo-none')
   
})



var mixer = mixitup('.product__inner');

});