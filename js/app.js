$(document).ready(function(){
    $('.container-slaider_food').slick({
        autoplay:true,
        slidesToShow:3,
        slidersToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                }
            },

            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    });

    $('.nav-tegair').click(function(){
        $('.sit-content_wraper').toggleClass('scaled');
    });

  });

