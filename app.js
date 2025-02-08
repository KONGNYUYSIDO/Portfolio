
let activeIndex = 1;     //initialize the index of the activeslide to 1
showSlides(activeIndex);    //display the initial slide
showSlides();

//function to navigate between previous and next slides 
function plusSlide(index) {
    showSlides(activeIndex += index);   //increment the activeslide index and display the new slide
}

//function to display the active slide
function activeSlide(index) {
    showSlides(activeIndex = index);    //setting the activeindex to a specific index and displaying the slide
}

//function to display the present slide
function showSlides(index) {
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');

    if (index > slides.length) {
        activeIndex = 1;     // checking if the index is greater than the length of the slides the index should go back to 1
    }

    if (index < 1) {
        activeIndex = slides.length;   //if the index is less than 1 it should go back to the last slide
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   //hiding all slides
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');    /// removes the active class from all dots
    }

    slides[activeIndex - 1].style.display = "block";

    dots[activeIndex - 1].classList.add('active');

    setTimeout(showSlides, 2000);
}