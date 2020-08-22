var sv = $(document).scrollTop();
console.log();




/*Event's carousel js*/
new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [{
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1.5',
            slidesToScroll: '1',
            itemWidth: 150,
            duration: 0.25
        }
    }, {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
            slidesToShow: 2.2,
            draggable: true,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
        }
    }]
});

/*Event's carousel js*/



/* productos y servicios */