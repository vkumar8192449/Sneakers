var currentpic = 1;
function photochange(num) {
    document.querySelector('#mainphoto img').src = `images/image-product-${num}.jpg`;
    document.querySelector('#modelmainphoto img').src = `images/image-product-${num}.jpg`;
    currentpic = num;

    document.querySelector(`#thums img:nth-child(1)`).style.border = 'none';
    document.querySelector(`#thums img:nth-child(1)`).style.filter = 'opacity(1)';

    document.querySelector(`#modelthums img:nth-child(1)`).style.border = 'none';
    document.querySelector(`#modelthums img:nth-child(1)`).style.filter = 'opacity(1)';

    document.querySelector(`#thums img:nth-child(2)`).style.border = 'none';
    document.querySelector(`#thums img:nth-child(2)`).style.filter = 'opacity(1)';

    document.querySelector(`#modelthums img:nth-child(2)`).style.border = 'none';
    document.querySelector(`#modelthums img:nth-child(2)`).style.filter = 'opacity(1)';

    document.querySelector(`#thums img:nth-child(3)`).style.border = 'none';
    document.querySelector(`#thums img:nth-child(3)`).style.filter = 'opacity(1)';

    document.querySelector(`#modelthums img:nth-child(3)`).style.border = 'none';
    document.querySelector(`#modelthums img:nth-child(3)`).style.filter = 'opacity(1)';

    document.querySelector(`#thums img:nth-child(4)`).style.border = 'none';
    document.querySelector(`#thums img:nth-child(4)`).style.filter = 'opacity(1)';
    document.querySelector(`#modelthums img:nth-child(4)`).style.border = 'none';
    document.querySelector(`#modelthums img:nth-child(4)`).style.filter = 'opacity(1)';

    document.querySelector(`#thums img:nth-child(${num})`).style.border = '3px solid #ff7d1b';
    document.querySelector(`#thums img:nth-child(${num})`).style.filter = 'opacity(0.5)';

    document.querySelector(`#modelthums img:nth-child(${num})`).style.border = '3px solid #ff7d1b';
    document.querySelector(`#modelthums img:nth-child(${num})`).style.filter = 'opacity(0.5)';
}
var quan = 1;
function quantity(id) {
    if (quan == 1 && id == -1) { }
    else {
        quan = quan + id;
    }
    document.querySelector('#details div button:nth-child(2)').innerHTML = quan;
}
function addtocart() {
    document.querySelector('#nav_right div span').style.display = 'block';
    document.querySelector('#nav_right div span').innerHTML = quan;
}

function whichphoto(temp) {
    if (temp == -1) {
        if (currentpic != 1) {
            photochange(currentpic - 1);
        }
        else {
            photochange(4);
        }
    }
    else if (temp == 1) {
        if (currentpic == 4) {
            photochange(1);
        }
        else {
            photochange(currentpic + 1);
        }
    }
}
function modelbox() {
    document.getElementById('model').style.display = 'flex';
}
function closemodel() {
    document.getElementById('model').style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == document.getElementById('model')) {
        document.getElementById('model').style.display = "none";
    }
}
var mode = 'light';
function switchmode() {
    if (mode == "light") {
        mode = "dark";
        document.querySelector('body').style.backgroundColor = '#252525';
        document.querySelector('#nav_left img').style.filter = 'invert(1)';
        document.getElementById('name').style.color = 'white';
        document.querySelector('#nav_right div img').style.filter = "invert(0)";
        document.querySelector('#nav_right div span').style.color = 'black';
        document.getElementById('price').style.color = 'white';
    }
    else {
        mode = "light";
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('#nav_left img').style.filter = 'invert(0)';
        document.getElementById('name').style.color = 'black';
        document.querySelector('#nav_right div img').style.filter = "invert(1)";
        document.querySelector('#nav_right div span').style.color = 'white';
        document.getElementById('price').style.color = 'black';
    }
}