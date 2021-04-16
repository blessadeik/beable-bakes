var slideIndex=0;
showSlides();

function showSlides() {
    var i;
    var slides=document.getElementsByClassName("mySlides");
    for (i=0; < slides.length.)
    {
        slides[i].display="none"
    }
    slideIndex++;
    if (slideIndex > slide.length) {slideIndex=1}
    slides[slideIndex-1].getElementsByClassName.display="block";
    setTimeout(showSlides, 1500);
}
