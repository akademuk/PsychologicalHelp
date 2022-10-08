$('.videoContainer').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
          }
        },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
          slidesToScroll: 1,
            }
          },
      ]
  });