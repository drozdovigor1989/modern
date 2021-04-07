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

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle()
  })

  $('.header__btn-menu').on('click', function () {
    $('.header-box').toggleClass('active')
    $('.header__top-logo').toggleClass('logo-none')

  })


  $(".tabs-stage .tab").hide();
  $(".tabs-stage .tab:first-child").show();
  $(".tabs-nav li:first").addClass("tab-active");

  // Change tab class and display content
  $(".tabs-nav a").on("click", function (event) {
    event.preventDefault();
    let parent = $(this).parents(".tabs-container");
    $(".tabs-nav li", parent).removeClass("tab-active");
    $(this)
      .parent()
      .addClass("tab-active");
    $(".tabs-stage .tab", parent).hide();
    $($(this).attr("href")).show();
  });



  var mixer = mixitup('.product__inner');

});