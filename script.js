var timer=60;
var scorenew=0;
var hitnew=0;


function scoreinc(){
    scorenew=scorenew+10;
    document.querySelector("#scorenew1").textContent=scorenew;
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
    var clickednum=(Number(details.target.textContent));

    if(clickednum === hitnew){
        scoreinc();
        makebubble();
        getnewhit();
    }

})

function getnewhit(){
    hitnew = Math.floor(Math.random()*10);
    document.querySelector("#hitnew1").textContent=hitnew;
}


function makebubble(){

var bub="";


for(var i=1;i<=102;i++){

   var num= Math.floor(Math.random()*10);

   bub=bub+`<div class="bubble">${num}</div>`;

}

document.querySelector("#pbtm").innerHTML=bub;


}

function runtimer(){
    var time=setInterval(function(){

        if(timer>0){
            timer--;
            document.querySelector("#timerdec").textContent=timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over<\h1>`;
            clearInterval(time);
        }
    },1000)

}


getnewhit();
runtimer();
makebubble();