let govern = document.getElementById('governBox');
let nixon = document.getElementById('nixonBox');
let nixonImg = document.getElementById('nixonImg');
let text = document.getElementById('textBox');
let body = document.getElementById('body');
let votedText = document.getElementById('votedText');

function voted(){
    nixon.removeEventListener("click", voted);
    govern.removeEventListener("click", voted);
    for(let i = 0; i < 1; i++){
        let votedNixon = document.createElement("p");
        text.appendChild(votedNixon);
        votedNixon.innerHTML = "Nixon";
        votedNixon.style.fontWeight = "bold";
    };
    for(let i = 0; i < 5; i++){
        let nixonWon = document.createElement("img");
        body.appendChild(nixonWon);
        nixonWon.src = "nixonCursor.png";
        nixonWon.style.paddingLeft = "4%";
    }
};

function loading(){
    alert("Don't forget, Nixon is great!");
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
  nixon.style.left = e.clientX + 'px';
  nixon.style.top = e.clientY + 'px';
};
document.addEventListener('mousemove', follow);

nixon.addEventListener('contextmenu', function(){
    this.style.cursor = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png'), not-allowed";
});