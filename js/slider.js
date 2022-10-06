$('.videoContainer').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            variableWidth: true,
            centerPadding: "40px",
          }
        },
        {
            breakpoint: 576,
            settings: {
                variableWidth: true,
              centerPadding: "10px",
            }
          },
      ]
  });