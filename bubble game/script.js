var container = document.querySelector(".container-body");
var timer = document.querySelector(".timer");
var hits = document.querySelector(".hits");
var score = document.querySelector(".Score");

var s = 0;
var hitno;
function updatescore() {
    s += 10
    score.textContent = s;
}

function createhit() {

    hitno=Math.floor(Math.random() * 10);
    hits.textContent = hitno;

}


function starttimer() {
    var t = 6;
    var time = setInterval(function () {
        if (t > 0) {
            t--;
            timer.textContent = t;
        }
        else {
            clearInterval(time);
            container.innerHTML=`<h1>Game Over!</h1>`
        }

    }, 1000);
}



function makeBubble() {
    let bubble = "";
    for (let i = 1; i < 120; i++) {
        let rn = Math.floor(Math.random() * 10)
        bubble += `<button class="bubble">
                    <span>${rn}</span>
                </button>`
    }
    container.innerHTML = bubble;
}

container.addEventListener("click",function(dets){
    let number=dets.target.textContent;
    if(number==hitno){
        updatescore();
        createhit();
        makeBubble();
    }
})




createhit();
makeBubble();
starttimer();



