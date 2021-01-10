
var computerChosen = document.getElementById("computerChosen")
var playerChosen = document.getElementById("playerC")
var displayStatus = document.getElementById("winLoseTitle")
var winsPoints = document.getElementById("winPoints");
var drawsPoints = document.getElementById("drawPoints");
var losesPoints = document.getElementById("losePoints");
   
var winPoints = 0;
 var drawPoints = 0;
 var losePoints = 0;



var gestures = ["rock", "paper", "scissors"]


function play(index) {
    var player= gestures[index]
    var computerChoice = gestures[Math.floor(3 * Math.random())];
    playerChosen.innerHTML =  player.valueOf(gestures[index])
    computerChosen.innerHTML = computerChoice
    var userChoice = player.valueOf(gestures[index]);
 


  
 
 // draw outcome 
    if(player == computerChoice){
        displayStatus.innerText = "Draw"
        drawPointsAdd();
    // win outcome
      }else if(userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper"){
        displayStatus.innerText = "win"
        winPointsAdd();

    // lose outcome     
    } else if (userChoice == "rock" && computerChoice == "paper" || userChoice == "paper" && computerChoice == "scissors" || userChoice == "scissors" && computerChoice == "rock"){
        displayStatus.innerText = "lose"
        losePointsAdd()
    }

   

}



function drawPointsAdd(){
    drawPoints+= 1
        draw = drawPoints
        drawsPoints.innerText = draw
}

function winPointsAdd(){
    winPoints+= 1
        win = winPoints
        winsPoints.innerText = win
}


function losePointsAdd(){
    losePoints+= 1
        lose = losePoints
        losesPoints.innerText = win
}