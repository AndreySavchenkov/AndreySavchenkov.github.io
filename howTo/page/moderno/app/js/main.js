$(function(){

    

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
                
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });


    
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
    
    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
    });

    //tabs

    $('.product-one__tabs .tab').on('click', function(event){
        var id= $(this).attr('data-id');
                $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
                $('.product-one__tabs .tabs').find('.tab').removeClass('active');
                $(this).addClass('active');
                $('#'+ id).addClass('active-tab').fadeIn();
                return false;
    })

    



    var mixer = mixitup('.products__inner-box');

   

});