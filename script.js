
//define the game elements in our html
const dice = document.getElementById("dice");
const my_status = document.getElementById("score_status");
const turn = document.getElementById("turn");

const blue_score = document.getElementById("blue_score");
const red_score = document.getElementById("red_score");

const roll = document.getElementById("roll");
const hold = document.getElementById("hold");


//local variables
let i = 0;
let blue_total = 0;
let red_total = 0;
var state = "blue";



//main class which handle the game
class Game_Play{
    constructor(){
        this.dice_number = 0;
    }

    play = function (){
        const self = this;

        //do things when roll button is clicked
        roll.addEventListener("click" , (e)=>{
            i=0;

            //interval wich handle the dice roll and hold state
            const  interval = setInterval(func,100);
            
            //this function is used for interval we have
            function func(){
                my_status.innerHTML = "Rolling...";
                turn.setAttribute("style" , "display:none");
                self.dice_number = Math.floor(Math.random() * 6) + 1;

                //do things when hold button is clicked
                hold.addEventListener("click" , ()=>{
                    clearInterval(interval);
                    let resault = self.dice_number; 


                    //this function used for if statments
                    function handler(x){
                        dice.setAttribute('src' , `imgs/dice_${x}.png`);
                        my_status.innerHTML = `you got ${x}`;
                        turn.setAttribute("style" , "display:inline");
                        turn.innerText = `turn for : ${state}`;
                        start();
                    }

                    
                    // if statments to handle the dice number
                    if(resault == 1){
                        handler(1);

                    }else if(resault == 2){
                        handler(2);

                    }else if(resault == 3){
                        handler(3);

                    }else if(resault == 4){
                        handler(4);

                    }else if(resault == 5){
                        handler(5);

                    }else{
                        handler(6);
                    }
                    
                    

                });
            }
            
        },false);
    }
}






// this function handle this turn system

function start(){
    let temp = 0;
    if(state === "blue"){
        temp = game.dice_number;

        for( i ; i == 0 ; i++){
            blue_total = temp + blue_total;
            state = "red";
        }
        blue_score.innerHTML = blue_total;
    }
    if(state === "red"){
        temp = game.dice_number;

        for( i ; i == 0 ; i++){ 
            red_total = temp + red_total;
            state = "blue";

        }
        red_score.innerHTML = red_total;
    }
    
    
}



//start the game
let game = new Game_Play(state);
game.play();















