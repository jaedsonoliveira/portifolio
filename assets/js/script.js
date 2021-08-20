$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

     // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
    
     // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing",{
        strings:["Frontend"],
        typeSpeed:200,
        backSpeed:60,
        loop:false
    });

    var typed = new Typed(".typing-2",{
        strings:["Frontend"],
        typeSpeed:200,
        backSpeed:120,
        loop:true
    });

     // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    //gallery script
    $(document).ready(function(){

        $('.buttons').click(function(){
    
            $(this).addClass('active').siblings().removeClass('active');
    
            var filter = $(this).attr('data-filter')
    
            if(filter == 'all'){
                $('.image').show(400);
            }else{
                $('.image').not('.'+filter).hide(200);
                $('.image').filter('.'+filter).show(400);
            }
    
        });
    
    });
    
});