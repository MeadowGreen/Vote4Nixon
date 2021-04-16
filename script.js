let govern = document.getElementById('governBox');
let nixon = document.getElementById('nixonBox');
let text = document.getElementById('textBox');

govern.addEventListener("click", () =>{
    alert("Are you sure??")
});

function pageLoad(){
    govern.style.visibility = "visible"
};

const follow = (e) =>{
  nixon.style.left = e.pageX + 'px';
  nixon.style.top = e.pageY + 'px';
};
document.addEventListener('mousemove', follow);

function nixonChange(){
    document.getElementById('nixonImg').src = 'nixonSmile.jfif';
};
function nixonNormal(){
    document.getElementById('nixonImg').src = 'nixonClip.jfif';
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