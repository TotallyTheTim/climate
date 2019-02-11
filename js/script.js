
let bob = document.getElementById('bob');
let bob_I = 0;
let bob_left = bob.offsetLeft;
let jumpies = {
    5 : [3800,4980],
    6 : [980,1660],
    7 : [2150, 2910]
};

window.addEventListener("scroll", function (event) {
    bob_walk();
    let scroll = this.scrollY;
    document.getElementById('scrollScore').innerHTML = "score: " + Math.round(scroll/10) + "<br><button onclick='unmute'>Unmute!</button>";
    console.log(scroll);
    document.getElementById('ground').style.left = -scroll + "px";
    bob.style.bottom = 135.5 + "px";

    //For loop for jumps
    let i;
    //For each jump strength:
    for (i = 0; i < Object.keys(jumpies).length; i++) {

        //For each jump strength's position scroll
        let ii = 0;
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
