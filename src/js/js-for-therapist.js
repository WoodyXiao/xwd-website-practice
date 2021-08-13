// select html elements with the class name of 'btn'
let btn = document.getElementsByClassName('btn');
// select html element with the class name of 'left-btn'
let pre = document.querySelector('.left-btn');
// select html element with the class name of 'right-btn'
let next = document.querySelector('.right-btn');
// select the part of section with the ID name of 'slide'
let slide = document.getElementById('slide');
let count = 0;

//some of method below I use this link as reference:
//'https://dev.to/code_mystery/image-slider-using-html-css-and-javascript-5dfn'
// When user click next button one time, count will add by 1, and the value of 
// count could be as the index of the list of btn that selected classname is 'btn'.
// the one that pick will add another class name of 'active' to it, which mean that one 
// will be longer shape and purple color. at the same time, inside the for loop, will 
// remove any of btn that has been added 'active', to make sure when the moment click 
// on that next button, all btn will be reset and then only the one that is selected 
// will be purple color and longer shap. and also, the slide, which is selecting all 
// html element with id of 'slide', will be translate with X direction with the value 
// of the ethier 25%, or 50%, 75%, the maximum will be 75%, otherwise will execeed the 
// screen. 
next.addEventListener('click', () => {
    count++;
    console.log("x");
    let value;
    if (count <= 3) {
        value = count * 25;
    } else {
        value = 0;
        count = 0;
    }
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
    }
    btn[count].classList.add('active');


    slide.style.transform = `translateX(-${value}%)`;

});

pre.addEventListener('click', () => {
    count--;
    console.log("x");
    let value;
    if (count >= 0) {
        value = count * 25;
    } else {
        value = 75;
        count = 3;
    }
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
    }
    btn[count].classList.add('active');

    slide.style.transform = `translateX(-${value}%)`;

});

// when the first elemt of the btn list was clicked, run the function below
// slide will translated in X direction with 0, and first element of btn will add
// a new class name with 'active' to it, new CSS value will be applied, and the shape 
// will become purple and long shape. as well as the first element of the list of 
// navItem, the first will be hightlight will purple color. 

btn[0].onclick = () => {
    slide.style.transform = "translateX(0)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
    }
    btn[0].classList.add('active');

}

btn[1].onclick = () => {
    slide.style.transform = "translateX(-25%)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
    }
    btn[1].classList.add('active');

}

btn[2].onclick = () => {
    slide.style.transform = "translateX(-50%)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
    }
    btn[2].classList.add('active');
}

btn[3].onclick = () => {
    slide.style.transform = "translateX(-75%)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
    }
    btn[3].classList.add('active');


}