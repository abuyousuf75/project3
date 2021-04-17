$(function(){


  // Bottom-Top

  $('.bottom-top').click(function(){

    $('body,html').animate({scrollTop:0},1000);

});



  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.bottom-top').fadeIn(500);
    }
    else {
        $('.bottom-top').fadeOut(500);
    }


    // for navBar background

    if(scrolling>100){

        $('.nav').addClass('nav-bg');

    }else{
        
        $('.nav').removeClass('nav-bg');

    }
    

});



// Preloder

$(window).on('load',function(){

    $('.preloder').delay(2000).fadeOut(500);


})


// Slider Banner

$('.banner-start').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:800,
    arrows:true,
    speed:800,
    prevArrow:'.left',
    nextArrow:'.right',
    dots:false,
  });


  //blog slide
$('.blog-main').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay:false,
  autoplaySpeed:1200,
  arrows:false,
  dots:true,
});

//Chouse Slider


$('.chouse-right-main').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  arrows:false,
  dots:true,
  vertical: true,
  verticalSwiping: true,
  verticalPadding:0,
});



//  Spnser Slider 

$('.sponser-main').slick({
    slidesToShow: 5,
    autoplay:true,
    autoplaySpeed:1200,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'.l',
    nextArrow:'.r',
    dots:false,
  });


 // lightbox
 $('.venobox').venobox(); 

// counter
$('.counter').counterUp({
  delay: 10,
  time: 2500,
});

// wow js

new WOW().init();

//Smoth Scroll 
var html_body = $('html, body');
$('.nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 84
            }, 1500);
            return false;
        }
    }
});





})