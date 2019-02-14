setTimeout(function () {
    document.getElementById('loading').style.opacity = '0';
    document.getElementById('scrolly').style.height = document.getElementById('bg').offsetWidth + "px";
},3000);





window.scrollTo(0, 0);

let bob = document.getElementById('bob');
let bob_I = 0;
let bob_left = bob.offsetLeft;
let lastScrollPosition = 0;
let jumpies = {
    3.1 : [-316],
    3.15 : [3890,5400, 10120],
    5 : [3300,4490],
    6 : [490,1150, 9650],
    7 : [1685, 2420],
    16 : [7700],
    17: [8650],
    21: [10750]
    // 3.1 : [180],
    // 3.15 : [4380,5900],
    //
    // 5 : [3800,4980],
    //
    // 6 : [980,1660],
    //
    // 7 : [2150, 2910]

};

let boxes = {
    box1 : [1085,203,"Did you know that Driving a car is not good for Climate change?"],
    box2 : [5291,203,"The planet's average surface temperature has risen \n about 1.62 degrees Fahrenheit (0.9 degrees Celsius) \n since the late 19th century"],
    box3 : [6784,203,"Global sea level rose about 8 inches in the last century."],
    box4 : [7900,203,"Because of Climate Change, my Home will be melted away soon."],
    box5 : [9000,203,"If an Oil Rig goes wrong, the Oil will pollute \n the Artic water and the living enviroment of \n Wildlife."],
    box6 : [11535,203,"Because of Climate Change, the Artic Sea Ice \n and Ice Sheet has declined rapidly \n (Notice the background)"],
};


let i;
for (i = 0; i < Object.keys(boxes).length; i++) {

    newBox(boxes[Object.keys(boxes)[i]][0],boxes[Object.keys(boxes)[i]][1],Object.keys(boxes)[i],boxes[Object.keys(boxes)[i]][2]);
}

window.addEventListener("scroll", function (event) {
    document.getElementById('scrolly').style.height = document.getElementById('bg').offsetWidth + "px";

    document.getElementById('ground').style.width = document.getElementById('bg').offsetWidth + "px";
    document.getElementById('mountain').style.width = document.getElementById('bg').offsetWidth + "px";
    document.getElementById('ice').style.width = document.getElementById('bg').offsetWidth + "px";
    let scroll = this.scrollY;
    bob_walk(scroll);
    document.getElementById('scrollScore').innerHTML = "score: " + Math.round(scroll/10);
    console.log(scroll);
    document.getElementById('ground').style.left = -scroll + "px";
    document.getElementById('mountain').style.left = scroll/1.2 + "px";
    document.getElementById('mountain2').style.left = scroll/1.2 + "px";
    document.getElementById('ice').style.left = scroll/1.3 + "px";
    document.getElementById('text').style.left = -scroll/2.2 + "px";
    bob.style.bottom = 135.5 + "px";

    // var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    //
    // scrollY <= this.lastScroll
    //     ? console.log('up')
    //     : console.log('down');
    //
    // this.lastScroll = scrollY ;
    // var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    // var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    //
    // console.log('Scroll X:'+scrollX+' Scroll Y:'+scrollY);


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
    if (scroll > 13317) {bob.style.opacity = '0'}
    else                {bob.style.opacity = '1'; }
    
    
    if (scroll > 408){
        document.getElementById('box1').classList.add('boxUP');
        document.getElementById('begintext').classList.add('begonetext');
        document.getElementById('boxbox1').style.opacity = '1';

        if (scroll > 4614) {
            document.getElementById('box2').classList.add('boxUP2');
            document.getElementById('boxbox2').style.opacity = '1';

            if (scroll > 6115) {
                document.getElementById('box3').classList.add('boxUP');
                document.getElementById('boxbox3').style.opacity = '1';

                if (scroll > 6970) {
                    document.getElementById('boxbox4').style.opacity = '1';
                    document.getElementById('boxbox4').style.bottom =  235.5 + "px";

                    if (scroll > 7434) {
                        document.getElementById('bear').style.transform = "scaleX(1)";

                        if (scroll > 8105.5) {
                            document.getElementById('boxbox5').style.opacity = '1';

                            if (scroll > 10848) {
                                document.getElementById('box6').classList.add('boxUP2');
                                document.getElementById('boxbox6').style.opacity = '1';
                            }

                            else {
                                document.getElementById('box6').classList.remove('boxUP2');
                                document.getElementById('boxbox6').style.opacity = '0';
                            }

                        }

                        else {
                            document.getElementById('boxbox5').style.opacity = '0';
                        }

                    }
                    else {
                        document.getElementById('bear').style.transform = "scaleX(-1)";
                    }

                }

                else {
                    document.getElementById('boxbox4').style.opacity = '0';
                }

            }

            else {
                document.getElementById('box3').classList.remove('boxUP');
                document.getElementById('boxbox3').style.opacity = '0';
            }
        }

        else {
            document.getElementById('box2').classList.remove('boxUP2');
            document.getElementById('boxbox2').style.opacity = '0';
        }
    }
    else {
        document.getElementById('box1').classList.remove('boxUP');
        document.getElementById('begintext').classList.remove('begonetext');
        document.getElementById('boxbox1').style.opacity = '0';
    }








});

function bob_walk(scroll) {

    if (scroll < lastScrollPosition){
        //upward - code here
        if (bob_I < 10){
            bob.style.backgroundImage = "url(./img/walk_1.png)";
            bob.style.transform = "scaleX(-1)"
        } else if (bob_I > 19){
            bob_I = 0;
        } else {
            bob.style.backgroundImage = "url(./img/walk_2.png)";
        }
        bob_I++;
    }else{
        //downward - code here
        if (bob_I < 10){
            bob.style.backgroundImage = "url(./img/walk_1.png)";
            bob.style.transform = "scaleX(1)"
        } else if (bob_I > 19){
            bob_I = 0;
        } else {
            bob.style.backgroundImage = "url(./img/walk_2.png)";
        }
        bob_I++;
    }
    lastScrollPosition = scroll;


}

function jump(start,strength,scroll){
    let scroll_start = start + bob_left;
    if (scroll > scroll_start && scroll < (scroll_start + strength * 50)) {
        bob.style.bottom = 135.5 + (-0.02 * Math.pow((scroll - scroll_start), 2) + strength * (scroll - scroll_start)) + "px";
        bob.style.backgroundImage = "url(./img/jump.png)";
    }
}

function newBox(left_,bottom_,key,text) {
    let img = document.createElement('img');
    let div = document.createElement('div');
    div.innerText = text;
    img.src = "./img/box.png";
    img.classList.add('box');
    img.setAttribute("id",key);
    div.setAttribute("id","box" + key);
    img.style.left = left_ + "px";
    div.style.left = left_ + 100 + "px";
    div.style.bottom = bottom_ + 235.5 + "px";
    div.style.position = "absolute";
    img.style.bottom = bottom_ + 135.5 + "px";
    div.style.background = "#db5f21";
    div.style.borderBottom = "solid black 5px";
    div.style.boxShadow = "black 0 -5px 0,black -5px 0 0,black 5px 0 0,inset #fc9838 5px 5px 0";
    div.style.padding = "8px 12px 3px";
    div.style.font = "32px";
    div.style.fontSize = "25px";
    div.style.opacity = "0";
    document.getElementById('ground').appendChild(img);
    document.getElementById('ground').appendChild(div);
    // console.log('box made!');
    // return "left:" + left + "bottom:" + bottom + ""
}

