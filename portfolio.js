const multipleItemCarousel = document.querySelector
('#carouselExampleControls');

if(window.matchedMedia("(min-width:576px)"). matches) {
    const carousel = new bootstrap.Carousel (multipleItemCarousel, 
    {
        interval:false

    })
    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('carousel-item').width();

    var scrollPosition = 0;

    $('carousel-control-next') .on('click', function (){
        if(scrollPosition< (cardWidth - (cardWidth * 4))) {
            console.log('next');
            scrollPosition = scrollPosition + carouselWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
        }
    });
    $('carousel-control-prev') .on('click', function (){
        if(scrollPosition> 0 ) {
            console.log('prev');
            scrollPosition = scrollPosition - carouselWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
        }
    });
}else {
    $(multipleItemCarousel).addClass('slide');
}