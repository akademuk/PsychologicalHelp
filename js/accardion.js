$(document).ready(function() {
  $(".accordion > h3").on("click", function() {
    if ($(this).hasClass("color-tittle")) {
      $(this).removeClass("color-tittle");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".accordion > h3 i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".accordion > h3 i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".accordion > h3").removeClass("color-tittle");
      $(this).addClass("color-tittle");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});
