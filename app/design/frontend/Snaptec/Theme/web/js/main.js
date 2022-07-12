require(['jquery', 'jquery/ui'], function($){
    $(document).ready(function() {
        // reponsive
        let width = $(window).width();

        $('.block.block-search').after($('.minicart-wrapper'));

        if(width <= 768) {
            $('.block.block-search').appendTo($('.header-left'));
            $('.header-left').after($('.logo'));
            $('.panel .wrapper').after($('customer-welcome'));
            $('.footer-col').addClass('footer-collaps-btn');
            $('.footer-col:last').removeClass('footer-collaps-btn');
            $('.guide .main-title').after($('.guide .container img'));
            $('.about .main-title').after($('.about  .container img'));
            $('.customer-name .action.switch::after').css('color', 'red').css('content', 'dddd');
            
            let collaps = document.getElementsByClassName('footer-collaps-btn');
            $('.footer-collaps-btn').on('click', function() {
                if($('.footer-collaps-btn').hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).addClass('active');
                    $(this).children('menu').css("max-height", "20px");
                }
            });

            $('.minicart-wrapper').before('<div class="btn-user"></div>');
            $('.panel.header .links').appendTo('.btn-user');
            $('.btn-user .header:first').remove();
            $('.btn-user').hover(function () {
                    // over
                    $('.btn-user .header').css('display', 'flex');   
                }, function () {
                    // out
                    $('.btn-user .header').hide();
                }
            );

            $('.switcher.language.switcher-language').appendTo('.navigation');
            $('.switcher.language.switcher-language:last').remove();
        }

        if(width <= 540) {
        $('.banner img').attr('src', 'http://localhost/magento2/pub/media/wysiwyg/images/banner/banner-mb.png');
        }

        $(window).on('resize', function() {location.reload()});

        $('.block.block-search').click(function() {
            $('.block-search .control').show();
            $('.block-search .control input').focus();
        });

        $('.block-search .control input').blur(function() {
            $('.block-search .control').hide();
        });

        $('.nav-sections-item-content .navigation .level0 a').click(function() {
            // alert('aa');
            if($('.nav-sections-item-content .navigation .level0 a').next().hasClass('submenu')) {
                $(this).next().is(":hidden") ? $(this).next().css('display', 'block') : $(this).next().css('display', 'none'); 
            }
        });

        $(window).on('load', function() {
            $('.spinner').addClass('spinner--hidden');
    
            $('.spinner').on("transitionend", function() {
                $('.snipper').remove();
            });
         });

         $(window).on('scroll', function() {
            $(this).scrollTop() ? $('.back-top').fadeIn() : $('.back-top').fadeOut();
         });
    
         $('.back-top').click(function () { 
            $('html, body').animate({
                scrollTop: 0,
            }, 300);
         });

         $('.plus').on('click', function() {
            $('.plus').prev().val( + $('.plus').prev().val() + 1);
         })

         $('.minus').on('click', function() {
            if($('.minus').next().val() > 1) {
                $('.minus').next().val( $('.minus').next().val() - 1);
            }
         })
    })
})
 