require(['jquery', 'jquery/ui'], function($){
    $(document).ready(function () {
        $('.block.widget .products-grid .product-items').addClass('owl-carousel');
        $('.widget .block-title').hide();
        $('.product-item .action.towishlist').appendTo('.product-item-details');
    
        $(".best-sellers .block.widget .products-grid .product-items").owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 2,
                    margin: 20,
                },
                540: {
                    items: 2,
                    margin: 20,
                },
                768: {
                    items: 3,
                    margin: 20,
                },
            },
        });
    
        $(".block.widget .products-grid .product-items").owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10,
                },
                540: {
                    items: 2,
                    margin: 20,
                },
                768: {
                    items: 3,
                    margin: 30,
                },
                1000: {
                    items: 4,
                    margin: 30,
                }
            },
        });
    
        $('.product-image-wrapper img').attr('src', 'http://localhost/magento2/pub/media/catalog/product/cache/fd67c29a2c2c229b7f4c433e682cc245///p/-/p-best2.png');
    });
})