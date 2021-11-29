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

    $('.btn-app').click(function(){
        window.open('https://applandingpage.vercel.app', '_blank');

    });

    $('.btn-dolla').click(function(){
        window.open('https://dolla-react-website.vercel.app/', '_blank');

    });
    $('.btn-air').click(function(){
        window.open('https://next-airbnbclone.vercel.app/', '_blank');

    });

    $('.btn-hulu').click(function(){
        window.open('https://huluclone12.netlify.app/', '_blank');

    });

    $('.btn-music').click(function(){
        window.open('https://musicplayerjavascript2.netlify.app/', '_blank');

    });

    $('.btn-venda').click(function(){
        window.open('https://venda-comida.netlify.app/', '_blank');
    });

    $('.btn-bad').click(function(){
        window.open('https://breaking-character.netlify.app/', '_blank');
    });

    // typing text animation script
    var typed = new Typed(".typing",{
        strings:["Frontend", "PHP"],
        typeSpeed:150,
        backSpeed:100,
        loop:true
    });

    var typed = new Typed(".typing-2",{
        strings:["Frontend", "PHP"],
        typeSpeed:150,
        backSpeed:100,
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