
var slideIndex = 1;
showDivs(slideIndex, "mySlides");
showDivs(slideIndex, "mySlides2");

function plusDivs(n, slides) {
  showDivs(slideIndex += n, slides);
}

function showDivs(n, slides) {
  var i;
  var x = document.getElementsByClassName(slides);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
};



