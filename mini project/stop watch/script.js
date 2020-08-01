let hour=min=sec=0;
let interval=null;

let hh=mm=ss=0;

function timer(){
    sec=sec+1;
    if(sec % 60 == 0){
        sec=0;
        min=min+1;
        if(min % 60 == 0){
            min=0;
            hour=hour+1;
        }
    }

    ss=(sec<10)?'0'+sec:sec;
    mm=(min<10)?'0'+min:min;
    hh=(hour<10)?'0'+hour:hour;

    document.getElementById('demo').innerHTML=`${hh} : ${mm} : ${ss}`;
}

function start(){
        interval=window.setInterval(timer,1000);
}

function stop(){
       window.clearInterval(interval);
}

function reset(){
    window.clearInterval(interval);
    hour=min=sec=0;
    document.getElementById('demo').innerHTML='00 : 00 : 00';
}
