AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html,body").animate({ scrollTop: top }, parseInt(300));
})



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

