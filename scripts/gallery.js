let activeSlideNumber = 1;

let container = document.querySelector('.gallery');

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');

function hideActiveSlide() {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active')
}

function showSlide1() {
    hideActiveSlide()
    dot1.classList.add('active')
    container.style.backgroundImage = "url('../img/kot1.jpg')";
}

function showSlide2() {
    hideActiveSlide()
    dot2.classList.add('active')
    container.style.backgroundImage = "url('../img/pies1.jpg')";
}

function showSlide3() {
    hideActiveSlide()
    dot3.classList.add('active')
    container.style.backgroundImage = "url('../img/rybka1.jpg')";
}

function showNextSlide() {
    activeSlideNumber += 1;
    if (activeSlideNumber == 2) {
        showSlide2();
    } else if (activeSlideNumber == 3) {
        showSlide3();

    } else {
        showSlide1();
        activeSlideNumber -= 3
    }
}

function showPreviousSlide() {
    activeSlideNumber -= 1;
    if (activeSlideNumber == 0) {
        showSlide3();
        activeSlideNumber += 3
    } else if (activeSlideNumber == 2) {
        showSlide2();
    } else {
        showSlide1();
    }
}

dot1.addEventListener('click', showSlide1)
dot2.addEventListener('click', showSlide2)
dot3.addEventListener('click', showSlide3)
arrowRight.addEventListener('click', showNextSlide)
arrowLeft.addEventListener('click', showPreviousSlide)