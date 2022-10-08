$(function(){
    $('.mainAccordion .accordion').on('click', function(){
      $(this).next('.content', this).slideToggle().siblings('.content').slideUp();
      $(this).find('i').toggleClass('fa-minus').end().siblings('.accordion').find('i').removeClass('fa-minus');
    });
});


var selector = '.accordion-tittle';
$(selector).on('click', function(){
    $(selector).removeClass('color-tittle');
    $(this).addClass('color-tittle');
});