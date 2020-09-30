
var gameTimerEl = document.getElementById("timer")


function gameTimer() {
    var time = 60;
    gameTimerEl.textContent = time + "seconds left";
    var intervalId = setInterval(function(){
      time--;
      gameTimerEl.textContent = time + "seconds left";
      console.log(time);
      if(time===0){
          clearInterval(intervalId);
          gameTimerEl.textContent = "";
      }
    }, 1000)
}

