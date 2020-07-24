let name=prompt('Enter your name');
let wel=[`Welcome ${name}`];
document.getElementById('uname').innerHTML=wel;

let clock=()=>{
    let date=new Date();
    let time=date.toLocaleTimeString();
    document.getElementById('time').innerHTML=time;
}

setInterval(clock,1000);

let dark=()=>{
    setTimeout(()=>{
       let btn=document.body;
       btn.classList.toggle('mystyle');

    },2000);
}