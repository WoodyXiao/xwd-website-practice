let btn = document.getElementsByClassName('btn');
let slide = document.getElementById('slide');

let navItem = document.getElementsByClassName('navItem');
let selectedItem = document.getElementsByClassName('selected');

let pre = document.querySelector('.left-btn');
let next = document.querySelector('.right-btn');
let count = 0;

// when the first elemt of the btn list was clicked, run the function below
// slide will translated in X direction with 0, and first element of btn will add
// a new class name with 'active' to it, new CSS value will be applied, and the shape 
// will become purple and long shape. as well as the first element of the list of 
// navItem, the first will be hightlight will purple color. 
btn[0].onclick = () => {
    slide.style.transform = "translateX(0)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
        navItem[i].classList.remove('selected');
    }
    btn[0].classList.add('active');
    navItem[0].classList.add('selected');

}

btn[1].onclick = () => {
    slide.style.transform = "translateX(-25%)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
        navItem[i].classList.remove('selected');
    }
    btn[1].classList.add('active');
    navItem[1].classList.add('selected');

}

btn[2].onclick = () => {
    slide.style.transform = "translateX(-50%)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
        navItem[i].classList.remove('selected');
    }
    btn[2].classList.add('active');
    navItem[2].classList.add('selected');
}

btn[3].onclick = () => {
    slide.style.transform = "translateX(-75%)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
        navItem[i].classList.remove('selected');
    }
    btn[3].classList.add('active');
    navItem[3].classList.add('selected');

}

navItem[0].onclick = () => {
    document.querySelector('#first').scrollIntoView(true)
    slide.style.transform = "translateX(0)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
        navItem[i].classList.remove('selected');
    }
    btn[0].classList.add('active');
    navItem[0].classList.add('selected');

}

navItem[1].onclick = () => {
    slide.style.transform = "translateX(-25%)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
        navItem[i].classList.remove('selected');
    }
    btn[1].classList.add('active');
    navItem[1].classList.add('selected');

}

navItem[2].onclick = () => {
    slide.style.transform = "translateX(-50%)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
        navItem[i].classList.remove('selected');
    }
    btn[2].classList.add('active');
    navItem[2].classList.add('selected');

}

navItem[3].onclick = () => {
    slide.style.transform = "translateX(-75%)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove('active');
        navItem[i].classList.remove('selected');
    }
    btn[3].classList.add('active');
    navItem[3].classList.add('selected');

}

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
        navItem[i].classList.remove('selected');
    }
    btn[count].classList.add('active');
    navItem[count].classList.add('selected');

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
        navItem[i].classList.remove('selected');
    }
    btn[count].classList.add('active');
    navItem[count].classList.add('selected');

    slide.style.transform = `translateX(-${value}%)`;

});



function getQueryVariable() {

    // In here, query select the url of the index.html.
    // in my case, console query is ""http://127.0.0.1:5500/index.html"
    var query = window.location.href;

    // indexOf()method I referenced as this link:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    // if I clicked other tap on the navigation bar on other page, the link will be shown as below:
    // http://127.0.0.1:5500/index.html#therapistID?a=1
    if (query.indexOf('?') > 0) {
        // using split("?"), it will split by commas at loaction that ?, return a list.
        // ["http://127.0.0.1:5500/index.html#therapistID", "a=1"]
        var vars = query.split("?")

        // pair only select the second element of the list, which is "a=1".
        // and split('='), which return only 1 in this case. 
        // then if pair is equal 1, then use scrollIntoView method, and also 
        // setting btn and navItem at the same time. 
        var pair = vars[1].split("=")[1];
        if (Number(pair) == 1) {

            // scrollIntoView() method reference as this links:
            // 'https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview/'
            document.querySelector('#therapistID').scrollIntoView(true)
        } else if (Number(pair) == 2) {
            document.querySelector('#ethicsID').scrollIntoView(true)
        } else if (Number(pair) == 3) {
            document.querySelector('#acknowledgementsID').scrollIntoView(true)
        }
        for (i = 0; i < 4; i++) {
            btn[i].classList.remove('active');
            navItem[i].classList.remove('selected');
        }
        btn[Number(pair)].classList.add('active');
        navItem[Number(pair)].classList.add('selected');
    } else {
        document.querySelector('#first').scrollIntoView(true)

    }

}

getQueryVariable();