$(document).ready(function(){
    $('.container-slaider_food').slick({
        autoplay:true,
        slidesToShow:3,
        slidersToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
    });

    $('.nav-tegair').click(function(){
        $('.sit-content_wraper').toggleClass('scaled');
    });

  });

