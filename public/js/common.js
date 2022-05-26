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

let src, pic, index, pic_prev, pic_next;
let pic_length = $(".map_floor").children(".map_floor_pic").length;
console.log(pic_length);
$(".map_floor_pic").click(function(){
    src = $(this).attr("src");
    pic = $(this);
    index = $(".map_floor_pic").index(pic);
    console.log(index);
    $(".map_floor_popup").fadeIn(300);
    $('body').css("overflow", "hidden");
    $(".map_floor_popup_pic").attr("src",src);
})

$(".map_floor_popup_arrow").click(function(){
    if($(this).hasClass("prev")){
        index--;
        if(index >= 0){
            pic_prev = $(".map_floor").children(".map_floor_pic").eq(index);
            src = pic_prev.attr("src");
            $(".map_floor_popup_pic").attr("src", src);
        } else {
            index = 0;
        }
    }else if($(this).hasClass("next")){
        index ++;
        if(index < pic_length){
            pic_next = $(".map_floor").children(".map_floor_pic").eq(index + 1);
            src = pic_next.attr("src");
            $(".map_floor_popup_pic").attr("src", src);
        }else {
            index = pic_length - 1;
        }
    }
})

$(".map_floor_popup_bg").click(function(){
    $(".map_floor_popup").fadeOut(300);
    $('body').css("overflow", "visible");
})




var swiper = new Swiper(".beautiful_swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    effect: "fade",
    speed: 2500,
    fadeEffect: {
        crossFade: true,
    },
})

