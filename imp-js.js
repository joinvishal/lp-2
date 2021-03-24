// POP-UP Section JS Starts
$(document).ready(function() { 
  //   get Heading
  let downLoadCta = $('.tes-res-cm .inner .download-cta');
  downLoadCta.click(function(){
    let headingEleTxt = $(this).parent().parent().find('h2').text().trim();//get the heading text
    let popupTextH2Ele = $('.tes-res-cm .popup-main .resource-form-main h2.append-text');//append element in popup
    popupTextH2Ele.text(headingEleTxt);
    $( ".popUpForm" ).css("display", "block");
    $('body').removeClass('popup-disappear').addClass('popup-enabled');
  }); 
  function disablePopup(){
    $( ".popUpForm" ).css("display", "none");
    $('body').addClass('popup-disappear').removeClass('popup-enabled');
  }
  $( ".close" ).click(function() {
    disablePopup();
  });
  let popupContainer = $('.popup-disappear .tes-res-cm .popContainer');
  $(document).mouseup(function (e) {
    if (!popupContainer.is(e.target) // if the target of the click isn't the container...
        && popupContainer.has(e.target).length === 0) {
      console.log('click');
            disablePopup();
    }
  });
});
// POP-UP Section JS Ends

$(function() {
  $('.tabs-nav a').click(function() {
    // Check for active
    $('.tabs-nav li').removeClass('active');
    $(this).parent().addClass('active');
    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content div').hide();
    $(currentTab).show();
    return false;
  });
});


/**
     * Accordion
     */
    var $accordion = $('.accordion');
    // Initially hide all accordion content
    $accordion.find('.accordion_content').hide();
    // Initially display the accordion content with .expanded class
    $accordion.find('.accordion_group.expanded .accordion_content').show();
    $accordion.find('.accordion_header').click(function(){
        // Hide the displayed sibling accordion content so only one appears at a time
       $accordion.find(".accordion_header").not(this).parent(".accordion_group.expanded").removeClass('expanded').children('.accordion_content').stop(true,true).slideUp();
        if(!$(this).parent('.accordion_group').hasClass('expanded')){
            // Display the accordion content if it is not displayed
            $(this).parent(".accordion_group").addClass('expanded').children('.accordion_content').stop(true,true).slideDown();
        }
        else{
            // Hide the accordion content if it is displayed
            $(this).parent(".accordion_group").removeClass('expanded').children('.accordion_content').stop(true,true).slideUp();
        }
    });
    
    
    $(window).scroll(function(){
      if ($(this).scrollTop() > 120) {
          $('.header').addClass('fixed');
      } else {
          $('.header').removeClass('fixed');
      }
});


if ($(window).width() >= 768) {   
var $wn = $(window);
$wn.scroll(function(){
var sticky = $('.header-container-wrapper');
scroll = $wn.scrollTop();
if(scroll>30)sticky.addClass('sticky-header');
else
sticky.removeClass('sticky-header');
}); 
};


<script src="https://cdn2.hubspot.net/hubfs/4298296/Assets%202018/jquery.sticky-sidebar-scroll.min.js"></script>
<script src="https://cdn2.hubspot.net/hubfs/4298296/Assets%202018/jquery.sticky-sidebar-scroll.js"></script>
<script type="text/javascript">
$(document).ready(function() {
$.stickysidebarscroll("#<id_of_last_element>",{offset: {top: 10, bottom: 200}});
});
</script>


// timer countdown  js
var dateTime = $('#date-time').text();
dateTime = dateTime.replace(/-/g, '/');
var countDownDate = new Date(dateTime).getTime();
// countDownDate.setHours(0, 0, 0, 0);
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  //   console.log('present date: ' + now);
  // Find the distance between now and the count down date01/01/2020
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  days = (days < 10) ? "0"+days : days;
  hours = (hours < 10) ? "0"+hours : hours;
  minutes = (minutes < 10) ? "0"+minutes : minutes;
  seconds = (seconds < 10) ? "0"+seconds: seconds;
  // Output the result in an element with id="demo"
  document.getElementById("date-time").innerHTML = days + "days " + hours + "hours "
    + minutes + "min " + seconds + "sec ";
  var array = [days, hours, minutes, seconds];
  var newHTML = $.map(array, function(value) {
    return(  '<td><h1>' + value + '</h1></td>');
  });
  $(".time").html(newHTML.join(""));
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("date-time").innerHTML = "EXPIRED";
    $(".time").text("EXPIRED");
  }
}, 1000);
// var time = $('.time');
// var timeText = time.text();
// console.log(timeText);
// if( timeText === 'EXPIRED') {
//   timeText.css({'font-size' '35px'});
// }


$(".pwr-parallax").each((function() {
            var e = $(this),
                t = e.parent();
            function r() {
                var r = t.offset().top,
                    i = $window.height(),
                    n = $window.scrollTop(),
                    a = t.innerHeight(),
                    s = n + i;
                if (s > r && n < r + a) var o = 1 * (s - r) / (i + a) * 100 + 0;
                var l = 1,
                    u = 1.3 * t.outerHeight() - e.height();
                u >= 0 && (l = 1 + u / e.height()), e.css({
                    top: o + "%",
                    transform: "translate(-50%, -" + o + "%) scale(" + l + ")",
                    "-webkit-transform": "translate(-50%, -" + o + "%) scale(" + l + ")"
                }), e.closest(".page-center").css("overflow", "hidden")
            }
