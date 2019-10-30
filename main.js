$(document).ready(function() {
    $('.h-content').before('<div class="mobile-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $('.mobile-trigger i').toggleClass('change');
        $('.nav-bar').toggleClass('change');
        return false;
    });
    $('.my-slick').slick({
        centerMode: true,
        arrows: false,
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