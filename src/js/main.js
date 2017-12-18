var $nav = $(".navigation");
var $window = $(window);

$window.scroll(function()
{
  let scroll = $window.scrollTop();  
  if(scroll > 14)
    $nav.addClass("scrolled");
  else
    $nav.removeClass("scrolled");
});
