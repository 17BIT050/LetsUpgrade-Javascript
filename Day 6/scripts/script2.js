
let color=['Wheat','Aquamarine','LightGray'];



function mulTable(){
    let n=+prompt('Enter n Value');
    for(let i=1;i<=10;i++)
    {
        let divs=document.getElementById('demo');
        divs.innerHTML+=`${i} * ${n} = ${i*n} `+'<br>'; 
    }
}

mulTable();


