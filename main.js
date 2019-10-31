$(document).ready(function() {
    $('.h-content').before('<div class="mobile-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $('.mobile-trigger i').toggleClass('change');
        $('.nav-menu').toggle()
        return false;
    });
    $('.my-slick').slick({
        centerMode: true,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '80px',
                    slidesToShow: 1
                }
            }
        ]

    });
});
x