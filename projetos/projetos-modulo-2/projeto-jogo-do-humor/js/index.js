function digitando(e) {
    let textoArray = e.innerHTML.split('');
    e.innerHTML = '';

    textoArray.forEach((letra, i) => {
        setTimeout(() => e.innerHTML += letra, 80 * i);
    });
}

function goSlide1() {
    let texto = document.querySelector('.one');
    digitando(texto);

    if(pointer2.className.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '0vw';
    } else if(pointer3.className.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '0vw';
    }

    pointer2.classList.remove('atual');
    pointer3.classList.remove('atual');

    pointer1.classList.add('atual');
}

function goSlide2() {
    let texto = document.querySelector('.two');
    digitando(texto);

    if(pointer1.className.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '-100vw';
    } else if(pointer3.className.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '-100vw';
    }
    
    pointer1.classList.remove('atual');
    pointer3.classList.remove('atual');

    pointer2.classList.add('atual');

    
}

function goSlide3() {
    let texto = document.querySelector('.three');
    digitando(texto);

    if(pointer2.className.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '-200vw';
    } else if(pointer1.className.indexOf('atual') !== -1) {
        document.querySelector('#slider-width').style.marginLeft = '-200vw';
    }

    pointer1.classList.remove('atual');
    pointer2.classList.remove('atual');

    pointer3.classList.add('atual');
}

function interval() {
    if(pointer1.className.indexOf('atual') !== -1) {
        goSlide2();
    } else if(pointer2.className.indexOf('atual') !== -1) {
        goSlide3();
    } else {
        goSlide1();
    }
}

function play() {
    mudar4();
    document.querySelector('#slider-width').style.display = 'none';
    document.querySelector('#pointers').style.display = 'none';
    document.querySelector('#game').style.display = 'block';
    digitando(h1);
}

function mudar1() {
    let h1 = document.querySelector('#h1-2');
    digitando(h1);
    item1.classList.add('none');
    item2.classList.remove('none');
}

function mudar2() {
    let h1 = document.querySelector('#h1-3');
    digitando(h1);
    item2.classList.add('none');
    item3.classList.remove('none');
}

function mudar3() {
    let h1 = document.querySelector('#h1-4');
    digitando(h1);
    item3.classList.add('none');
    item4.classList.remove('none');
}

function mudar4() {
    let h1 = document.querySelector('#h1-1');
    digitando(h1);
    item4.classList.add('none');
    item1.classList.remove('none');
}

function jogo() {
    digitando(texto);
    document.querySelector('#slider-width').style.display = 'flex';
    document.querySelector('#pointers').style.display = 'flex';
    document.querySelector('#game').style.display = 'none';
}

let pointer1 = document.querySelector('#pointer1');
let pointer2 = document.querySelector('#pointer2');
let pointer3 = document.querySelector('#pointer3');

let item1 = document.querySelector('#item1');
let item2 = document.querySelector('#item2');
let item3 = document.querySelector('#item3');
let item4 = document.querySelector('#item4');

let h1 = document.querySelector('#h1-1');

let texto = document.querySelector('.one');

digitando(texto);
setInterval(interval, 7000);

//O SLIDER CONTÉM UM BUG, QUE QUANDO CLICO VÁRIAS VEZES NO POINTER O TEXTO APARECE BUGADO NA TELA