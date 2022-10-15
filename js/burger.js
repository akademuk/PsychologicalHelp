$(".burger-menu").on("click",".bar",function(){
    $(".menu").slideToggle();
    $(".bar").toggleClass('change');
    if ($('.body').hasClass('bodyActive')) {
        $(".body").removeClass("bodyActive");
        $(".dl-menu").removeClass('dl-menuopen');
      } else {
        $(".body").addClass("bodyActive");
         $(".dl-menu").addClass('dl-menuopen');
     }
});

