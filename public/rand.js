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
  autoPlay: 3000,
});
