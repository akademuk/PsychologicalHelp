$(".burger-menu").on("click",".bar",function(){
    $(".menu").slideToggle();
    $(".bar").toggleClass('change');
    if ($('.body').hasClass('bodyActive')) {
        $(".body").removeClass("bodyActive");
      } else {
        $(".body").addClass("bodyActive");
     }
});
