
let slideshow = document.querySelector('.slideshow')
let slides = document.querySelectorAll('.slide')
let prevButton = document.querySelector('.btn.previous-slide-btn')
let nextButton = document.querySelector('.btn.next-slide-btn')
let counters = document.querySelectorAll(".slide-num")

prevButton.addEventListener('click', onPrevClick);
nextButton.addEventListener('click', onNextClick);

let currentIndex = 0;

function onPrevClick() {
    if (currentIndex > 0) {
        let prevousIndex = currentIndex;
        currentIndex = currentIndex - 1;
        switchSlide(prevousIndex);
    }
}

function onNextClick(e) {
    if ((currentIndex+1) < slides.length) {
        let previousIndex = currentIndex;
        currentIndex = currentIndex + 1;
        switchSlide(previousIndex);
    }
}

document.onkeydown = function(e) {

    if (e.keyCode === 37 && currentIndex > 0) {
        let prevousIndex = currentIndex;
        currentIndex = currentIndex - 1;
        switchSlide(prevousIndex);
    } else if (e.keyCode === 39 && (currentIndex+1) < slides.length) {
        let previousIndex = currentIndex;
        currentIndex = currentIndex + 1;
        switchSlide(previousIndex);
    }

    // switch (e.keyCode) {
    //     case 37:
    //         let prevousIndex = currentIndex;
    //         currentIndex = currentIndex - 1;
    //         switchSlide(prevousIndex);
    //         break;
    //     case 39:
    //         let previousIndex = currentIndex;
    //         currentIndex = currentIndex + 1;
    //         switchSlide(previousIndex);
    //         break;
    // }
}

function switchSlide(previousIndex) {
    // switch active slide
    slides[previousIndex].classList.remove("active")
    slides[currentIndex].classList.add("active")
    counters[previousIndex].classList.remove("active")
    counters[currentIndex].classList.add("active")

    // direction is previous
    
    if (previousIndex > currentIndex) {
        prevButton.parentElement.classList.add("previous")
    } else {
        nextButton.parentElement.classList.add("next")
    }

    setTimeout(function() {
        prevButton.parentElement.classList.remove("previous")
        nextButton.parentElement.classList.remove("next")
    }, 1500) 

    if (currentIndex != 0) {
        prevButton.classList.remove("shadow");
    } else {
        prevButton.classList.add("shadow");
    }

    if (currentIndex === (slides.length - 1)) {
        nextButton.classList.add("shadow");
    } else {
        nextButton.classList.remove("shadow");
    }

    console.log("current index is ", currentIndex, " and slides length is ", slides.length)

    // move new slide into viewport
    translateValue = currentIndex * slideshow.clientWidth * -1;
    slideshow.style.transform = "translateX(" + translateValue + "px)";


}


