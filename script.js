let govern = document.getElementById('governBox');
let nixon = document.getElementById('nixonBox');
let text = document.getElementById('textBox');
let nixonCount = document.getElementById('nixonCount');
let governCount = document.getElementById('governCount');

nixon.addEventListener("click", () =>{
    nixonCount.innerHTML ++ ;
}); 

govern.addEventListener("click", () =>{
    nixonCount.innerHTML ++ ;
});

function loading(){
    alert("Don't forget, Nixon is great!");
};

function voteNixon(){
    alert("Vote for Nixon! (He's the best)");
};

function governChange(){
    document.getElementById('governImg').src = 'nixonSmile.jfif';
    govern.style.background = "red";
    govern.style.transition = "0s"
    document.getElementById('governText').innerHTML = "Nixon";
};

function governNormal(){
    document.getElementById('governImg').src = 'mcgovernClip.jfif';
    govern.style.background = "blue";
    document.getElementById('governText').innerHTML = "McGovern";
};

const follow = (e) =>{
  nixon.style.left = e.pageX + 'px';
  nixon.style.top = e.pageY + 'px';
};
document.addEventListener('mousemove', follow);