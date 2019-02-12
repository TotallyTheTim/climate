setTimeout(function () {
    document.getElementById('loading').style.opacity = '0';
},3000);

window.scrollTo(0, 0);

let bob = document.getElementById('bob');
let bob_I = 0;
let bob_left = bob.offsetLeft;
let jumpies = {
    5 : [3800,4980],
    6 : [980,1660],
    7 : [2150, 2910]
};

let boxes = {
    box1 : [1085,203],
    box2 : [5291,203]
};


let i;
for (i = 0; i < Object.keys(boxes).length; i++) {

    newBox(boxes[Object.keys(boxes)[i]][0],boxes[Object.keys(boxes)[i]][1],Object.keys(boxes)[i]);
}

window.addEventListener("scroll", function (event) {
    document.getElementById('ground').style.width = document.getElementById('bg').offsetWidth + "px";
    bob_walk();
    let scroll = this.scrollY;
    document.getElementById('scrollScore').innerHTML = "score: " + Math.round(scroll/10);
    console.log(scroll);
    document.getElementById('ground').style.left = -scroll + "px";
    document.getElementById('text').style.left = -scroll/2.2 + "px";
    bob.style.bottom = 135.5 + "px";

    //For loop for jumps
    let i;
    //For each jump strength:
    for (i = 0; i < Object.keys(jumpies).length; i++) {

        //For each jump strength's position scroll
        let ii;
        for (ii = 0; ii < jumpies[Object.keys(jumpies)[i]].length; ii++) {
            //jump function call for according variables
            jump(jumpies[Object.keys(jumpies)[i]][ii],Object.keys(jumpies)[i],scroll);
        }

    }








});

function bob_walk() {
    if (bob_I < 10){
        bob.style.backgroundImage = "url(./img/walk_1.png)";
    } else if (bob_I > 19){
        bob_I = 0;
    } else {
        bob.style.backgroundImage = "url(./img/walk_2.png)";
    }
    bob_I++;
}

function jump(start,strength,scroll){
    let scroll_start = start + bob_left;
    if (scroll > scroll_start && scroll < (scroll_start + strength * 50)) {
        bob.style.bottom = 135.5 + (-0.02 * Math.pow((scroll - scroll_start), 2) + strength * (scroll - scroll_start)) + "px";
        bob.style.backgroundImage = "url(./img/jump.png)";
    }
}

function newBox(left_,bottom_,key) {
    let img = document.createElement('img');
    img.src = "./img/box.png";
    img.classList.add('box');
    img.setAttribute("name",key);
    img.style.left = left_ + "px";
    img.style.bottom = bottom_ + 135.5 + "px";
    document.getElementById('ground').appendChild(img);
    // console.log('box made!');
    // return "left:" + left + "bottom:" + bottom + ""
}
