function timer(){
    date= new Date();
    second=date.getSeconds();
    full_time = date.toLocaleTimeString();
    change= document.getElementById("para")
    change.innerHTML=full_time
    if((second%2)==0){
        change.style.color="red"
    }
    else(
        change.style.color="blue"
    )
}

function start(){
  start_time=setInterval(timer,1000);
}
function stop(){
    clearInterval(start_time);
}