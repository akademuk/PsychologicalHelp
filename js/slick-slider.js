$('.videoContainer').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            cssEase: 'linear'
          }
        }
      ]
  });