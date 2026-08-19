let hours = 1;
let minutes = 0;
let seconds = 0;
let timer;

function displaytime(){
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    document.getElementById("clock").innerHTML = `${h}:${m}:${s}`;
}

function startTimer() {
    timer = setInterval(() => {
        if(seconds > 0){
            seconds--;            
        }else if(minutes > 0){
            minutes--;
            seconds = 59;
        }else if(hours > 0){
            hours--;
            seconds=59;
            minutes=59;
        }else{
            clearInterval(timer)
            alert("Time over!");
        }

        displaytime();
    },1000)
}

function stoptimer(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);

    hours = 1;
    minutes = 0;
    seconds = 0;

    displaytime();  

}

