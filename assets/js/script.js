$(document).ready(function(){
    
    // main page slider
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav: true,
        dots: false,
        navText:["<img src='assets/img/arrow.svg'>","<img src='assets/img/arrow.svg'>"],
        responsive:{
            0:{
                items:1
            }
        }
    });

    // header up and down direction
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
            setTimeout(function(){ 
                $('header').addClass('down');
            }, 100);
       } else {
            setTimeout(function(){ 
                $('header').removeClass('down');
            }, 100);
       }
       lastScrollTop = st;
    });

    // search content
    $(".search").on('click',function(){
        $(".search-content").addClass('active');
    });

    $(".search-content .close-btn").on('click',function(){
        $(".search-content").removeClass('active');
    });
});