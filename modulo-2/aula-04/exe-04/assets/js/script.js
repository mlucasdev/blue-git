function goSlide1() {
    let class2 = document.querySelector('[data-js="card2"]').className;
    let class3 = document.querySelector('[data-js="card3"]').className;


    if(class2.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '0vw';
    }
    if(class3.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '0vw';
    }

    let button1 = document.querySelector('[data-js="card1"]');
    let button2 = document.querySelector('[data-js="card2"]');
    let button3 = document.querySelector('[data-js="card3"]');

    button2.classList.remove('atual');
    button3.classList.remove('atual');

    button1.classList.add('atual');
}

function goSlide2() {
    let class1 = document.querySelector('[data-js="card1"]').className;
    if(class1.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '-100vw';
    }

    let class3 = document.querySelector('[data-js="card3"]').className;
    if(class3.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '-100vw';
    }

    let button1 = document.querySelector('[data-js="card1"]');
    let button2 = document.querySelector('[data-js="card2"]');
    let button3 = document.querySelector('[data-js="card3"]');

    button1.classList.remove('atual');
    button3.classList.remove('atual');

    button2.classList.add('atual');

    
}

function goSlide3() {
    let class1 = document.querySelector('[data-js="card1"]').className;
    console.log(class1);
    if(class1.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '-200vw';
    }

    let class2 = document.querySelector('[data-js="card2"]').className;
    console.log(class2);
    if(class2.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '-200vw';
    }

    let button1 = document.querySelector('[data-js="card1"]');
    let button2 = document.querySelector('[data-js="card2"]');
    let button3 = document.querySelector('[data-js="card3"]');

    button1.classList.remove('atual');
    button2.classList.remove('atual');

    button3.classList.add('atual');


}

function interval() {
    let class1 = document.querySelector('[data-js="card1"]').className;
    let class2 = document.querySelector('[data-js="card2"]').className;
    let class3 = document.querySelector('[data-js="card3"]').className;
    if(class1.indexOf('atual') !== -1) {
        goSlide2();
    }
    if(class2.indexOf('atual') !== -1) {
        goSlide3();
    } 
    if(class3.indexOf('atual') !== -1){
        goSlide1();
    }
}

let temp = 6000;

setInterval(interval, temp);

let totalSlides = document.querySelectorAll('.slider-item').length;

document.querySelector('#slider-width').style.width = `calc(100vw * ${totalSlides})`;



