$('.slider_review').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    // centerPadding: '30px',
    infinite: false
});


$(function() {
    // Generic selector to be used anywhere
    $(".scroll").click(function(e) {

        // Get the href dynamically
        var destination = $(this).attr('href');

        // Prevent href=“#” link from changing the URL hash (optional)
        e.preventDefault();

        // Animate scroll to destination
        $('html, body').animate({
            scrollTop: $(destination).offset().top - $(window).height() / 5
        }, 1500);
    });
});

// Start Comment date


oldDate = new Date()
// day=new Date(oldDate.getFullYear()-2,oldDate.getMonth()+22,oldDate.getDate()+61);
// console.log(date.toLocaleDateString("fr-FR"));

day1 = new Date(oldDate.getFullYear() - 2, oldDate.getMonth() + 22, oldDate.getDate() + 61);
day2 = new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate() - 1);
day3 = new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate() - 1);
day4 = new Date(oldDate.getFullYear(), oldDate.getMonth() - 1, oldDate.getDate() + 10);

let date1 = $('.date')[0]
let date2 = $('.date')[1]
let date3 = $('.date')[2]
let date4 = $('.date')[3]

$(date1).text(day1.toLocaleDateString("ro-RO"))
$(date2).text(day2.toLocaleDateString("ro-RO"))
$(date3).text(day3.toLocaleDateString("ro-RO"))
$(date4).text(day4.toLocaleDateString("ro-RO"))


//END Comment date


$('#beige').click(swiper, function() {
    swiper.slideTo(0);
    $('.pick_color .color img').removeClass('active')
    $(this).find('img').addClass('active')
    comment = 'beige'
})

$('#gray').click(swiper, function() {
    swiper.slideTo(1);
    $('.pick_color .color img').removeClass('active')
    $(this).find('img').addClass('active')
    comment = 'gray'
})

$('#black').click(swiper, function() {
    swiper.slideTo(2);
    $('.pick_color .color img').removeClass('active')
    $(this).find('img').addClass('active')
    comment = 'black'
})

$('#red').click(swiper, function() {
    swiper.slideTo(3);
    $('.pick_color .color img').removeClass('active')
    $(this).find('img').addClass('active')
    comment = 'red'
})

$('#pink').click(swiper, function() {
    swiper.slideTo(4);
    $('.pick_color .color img').removeClass('active')
    $(this).find('img').addClass('active')
    comment = 'pink'
})