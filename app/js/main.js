$(function () {

    var mixer = mixitup('.product__inner');

    $('.product__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
    })


    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
    });



});