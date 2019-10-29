$(document).ready(function() {
    $('.h-content').before('<div class="mobile-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $('.mobile-trigger i').toggleClass('change');
        $('.nav-bar').toggleClass('change');
        return false;
    });
});

$(document).ready(function() {
    $('.my-slick').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]

    });
});