let Increment = document.getElementById('Increment');
let Decrement = document.getElementById("Decrement");
let playPause = document.getElementById("playPause");
let Input = document.getElementById("number")

let isRunning=false;
let id;


function togglePlayPause() {
  if(isRunning){
    stop();
  }
  else{
    start();
  }
   
}
function stop(){
    clearInterval(id);
    playPause.innerText="Start"
    isRunning=false

}

function start(){
   id= setInterval(() => {
        Input.value++
    }, 1000);
    playPause.innerText="Stop"
    isRunning=true
    
}

function increment() {
    clearInterval(id)
    Input.value++


}

function decrement() {
    clearInterval(id)
    Input.value--


}




