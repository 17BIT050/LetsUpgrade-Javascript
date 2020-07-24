
let color=['Wheat','Aquamarine','LightGray'];
let i=0;
let len=color.length;
function changeColor(){
    document.body.style.backgroundColor=color[i];
    i=(i+1)%len;
}

setInterval(changeColor,5000);