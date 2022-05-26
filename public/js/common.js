AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html,body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-top").click(function(){
    $("html,body").animate({scrollTop: 0}, 300);
})

$(".map_floor_pic").click(function(){
    $(this).addClass("active");
    $(this).siblings(".map_floor_pic").removeClass("active");
})

$(document).click(function (event) {
    var area = $(".map_floor_pic");
    if (!area.is(event.target) && area.has(event.target).length === 0) {
        $(".map_floor_pic").removeClass("active");
    }
});


var swiper = new Swiper(".beautiful_swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    effect: "fade",
    speed: 2500,
    fadeEffect: {
        crossFade: true,
    },
})

