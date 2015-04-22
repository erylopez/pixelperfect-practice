$(document).ready(resize());
$(window).resize(function() {
  resize();
});

function resize(){
  var vHeight = $(window).height(),
    vWidth = $(window).width(),
    cover = $('.presentation-bg');

  cover.css({"height":vHeight,"width":vWidth});
}