///////////////////////////////Image paths
var Tony = "url('/Resources/Images/Tony.png')"
var Toni = "url('/Resources/Images/Tonii.png')"
var Tone = "url('/Resources/Images/Tone.png')"



//////////////////////////scores

var redScore = document.getElementById('redScore')
var blueScore = document.getElementById('blueScore')
var tieTally = document.getElementById('ties')
var gameCount = document.getElementById('gamesPlayed')
var winText = document.getElementById('winnerText')
//////////////////////////////////reset button

var resetCheck = document.getElementById('gameOver');


///////////////////////boxes for clicking

var box1 = document.getElementById('b1');
var box2 = document.getElementById('b2');
var box3 = document.getElementById('b3');
var box4 = document.getElementById('b4');
var box5 = document.getElementById('b5');
var box6 = document.getElementById('b6');
var box7 = document.getElementById('b7');
var box8 = document.getElementById('b8');
var box9 = document.getElementById('b9');

/////////////////////////////chips for playing
var chip1 = document.getElementById('chip1');
var chip2 = document.getElementById('chip2');
var chip3 = document.getElementById('chip3');
var chip4 = document.getElementById('chip4');
var chip5 = document.getElementById('chip5');
var chip6 = document.getElementById('chip6');
var chip7 = document.getElementById('chip7');
var chip8 = document.getElementById('chip8');
var chip9 = document.getElementById('chip9');
///////////////////////////////////////overlays for ID

var playerCol1 = document.getElementById('ovid1');
var playerCol2 = document.getElementById('ovid2');
var playerCol3 = document.getElementById('ovid3');
var playerCol4 = document.getElementById('ovid4');
var playerCol5 = document.getElementById('ovid5');
var playerCol6 = document.getElementById('ovid6');
var playerCol7 = document.getElementById('ovid7');
var playerCol8 = document.getElementById('ovid8');
var playerCol9 = document.getElementById('ovid9');
var playerColArr = [playerCol1, playerCol2,playerCol3,playerCol4,playerCol5,
    playerCol6, playerCol7, playerCol8, playerCol9]
///////////////////////////////////////////////Score Vars

var redWin = 0
var blueWin = 0
var tieGame = 0
var gamesPlayed = 0
///////////////////////////////////////////score board



//count for ID color
var turnCount = 0;
var endCondition ="none";


var boxesArr = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
var chipsArr = [chip1,chip2,chip3,chip4,chip5,chip6,chip7,chip8,chip9]

// CHIP APPEAR
var chipAppear = (index)=>{
if(endCondition === "none"){
    chipsArr[index].style.display ='block';
colorPicker(index);
gameOverTest()
}}

///////Color func
var colorPicker=(index)=>{
    if(endCondition === "none"){
    if (chipsArr[index].isClicked === undefined){
        chipsArr[index].isClicked = true;
        if(turnCount === 0 || (turnCount % 2) === 0){
            playerColArr[index].style.backgroundColor = 'red';
            chipsArr[index].color = 'red'
            turnCount++
            
        } else {
            playerColArr[index].style.backgroundColor = 'blue';
            chipsArr[index].color = 'blue'
            turnCount ++;
            
        }
        }}}
//////////////////////////Click functionality
for (let i = 0; i<chipsArr.length; i++){

    boxesArr[i].onclick = function(){chipAppear(i)
           
          
  }}
  
/////////////////////////////////////Win Conditions

const gameOverTest = ()=>{
    if (chip1.color === chip2.color && chip1.color === chip3.color && chip1.color !== undefined){
    console.log(`${chip1.color} wins!`) 
    endCondition = chip1.color;
    setTimeout(resetButton, 500);
} else if (chip4.color === chip5.color && chip4.color === chip6.color && chip4.color !== undefined){
    console.log(`${chip4.color} wins!`) 
    endCondition = chip4.color;
    resetButton();
}else if (chip7.color === chip8.color && chip7.color === chip9.color && chip7.color !== undefined){
    console.log(`${chip7.color} wins!`) 
    endCondition = chip7.color;
    resetButton();
}else if (chip1.color === chip5.color && chip1.color === chip9.color && chip1.color !== undefined){
    console.log(`${chip1.color} wins!`) 
    endCondition = chip1.color;
    resetButton();
}else if (chip3.color === chip5.color && chip3.color === chip7.color && chip3.color !== undefined){
    console.log(`${chip3.color} wins!`) 
    endCondition = chip3.color;
    resetButton();
}else if (chip2.color === chip5.color && chip2.color === chip8.color && chip2.color !== undefined){
    console.log(`${chip2.color} wins!`) 
    endCondition = chip2.color;
    resetButton();
}else if (chip3.color === chip6.color && chip3.color === chip9.color && chip3.color !== undefined){
    console.log(`${chip3.color} wins!`) 
    endCondition = chip3.color;
    resetButton();
}else if (chip1.color === chip4.color && chip1.color === chip7.color && chip1.color !== undefined){
    console.log(`${chip1.color} wins!`) 
    endCondition = chip1.color;
    resetButton();
}else if ( endCondition === 'none' && turnCount > 8 ){
    console.log('Tie Game');
    endCondition = 'tie'
    resetButton();
}
}

////////////////////////Resetter

const reset = ()=>{
    turnCount = 0;
    endCondition = 'none';
    chipsArr.forEach((element,index) =>{
        chipsArr[index].isClicked = undefined;
    });
    chipsArr.forEach((element,index) =>{
        chipsArr[index].style.display = 'none';
    });
    chipsArr.forEach((element,index) =>{
        chipsArr[index].color = undefined;
    });
    resetCheck.style.display ='none';
    chipImageRand();

}
////////////////////////////Reset Button On

const resetButton=()=>{
    if(endCondition !== 'none'){
resetCheck.style.display = 'block';
scoreKeeper();
resetCheck.onclick = reset;
winText.innerHTML= finalTextGen();


}}

////////////////////////////////ScoreKeeper
const scoreKeeper=()=>{
    if (endCondition !== 'none'){
        if (endCondition === 'red'){
            redWin++
            gamesPlayed++
        } else if (endCondition === 'blue'){
            blueWin ++
            gamesPlayed++

        } else if (endCondition === 'tie'){
            tieGame ++
            gamesPlayed++

        }
        redScore.innerHTML=redWin;
        blueScore.innerHTML=blueWin;
        tieTally.innerHTML=tieGame;
        gameCount.innerHTML=gamesPlayed;

    }
}



/////////////////////////////Randomize Chip Image

const chipImageRand = () =>{
    for(let i = 0; i<chipsArr.length; i++){
   var picker = Math.floor(Math.random()*3);
   switch (picker) {
       case 0:
           chipsArr[i].style.backgroundImage= Tone
           console.log("image assigned");
           break;
        case 1:
                chipsArr[i].style.backgroundImage= Toni
                console.log("image assigned");
                break;
        case 2:
                chipsArr[i].style.backgroundImage= Tony
                console.log("image assigned");
                break;
                
       default:
                console.log("ERROR")
           break;
   }

}}
var finalTextGen = ()=>{
    if(endCondition === 'red'){
        return "Red Wins!"
    } else if(endCondition === 'blue'){
        return "Blue Wins!"
    } else if (endCondition === 'tie'){
        return "Tie Game."
    } else { return "Error!"}
}

chipImageRand();
