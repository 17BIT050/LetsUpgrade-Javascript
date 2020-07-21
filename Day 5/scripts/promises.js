// function sample(callback){
//     setTimeout(()=>{
//         alert('Welcome');
//         callback();
//     },5000);
// }
 
// function display(){
//     document.write('Callback');
// }

// sample(display);

console.log('Fetch API');
// fetch('https://jsonplaceholder.typicode.com/comments/1')
// .then(response=>response.json())
// .then(data=>console.log(data))

async function sample(){
    const response=await fetch('https://api.chucknorris.io/jokes/random');
    const data=await response.json();
    console.log(data);
}
sample();