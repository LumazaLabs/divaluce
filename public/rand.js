var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
  cellSelector: ".carousel-cell",
  draggable: true,
  freeScroll: false,
  pageDots: false,
});

// previous
$(".button--prev").on("click", function () {
  $carousel.flickity("previous");
});
// next
$(".button--nex").on("click", function () {
  $carousel.flickity("next");
});
