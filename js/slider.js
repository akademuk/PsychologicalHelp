$('.slide').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
          }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              variableWidth: true,
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
      ]
  });