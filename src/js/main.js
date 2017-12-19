var $nav = $(".navigation");
var $menu = $(".navigation__menu");
var $burger = $(".burger");
var $window = $(window);

$window.scroll(function()
{
  let scroll = $window.scrollTop();
  if(scroll > 14)
    $nav.addClass("scrolled");
  else
    $nav.removeClass("scrolled");
});
$burger.click(function(){
  $menu.toggleClass("activated");
});
