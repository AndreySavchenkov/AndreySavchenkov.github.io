$(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><img src="../images/right.svg" alt=""></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/left.svg" alt=""></button>',
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
      });




      $('.header__menu-btn').on('click', function(){
        $('.header__nav').slideToggle();
    });
  });

