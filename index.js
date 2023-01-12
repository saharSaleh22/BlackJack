let firstcard=getRandomCard()
let seconedcard=getRandomCard()
let cards=[firstcard,seconedcard]
let sum=firstcard+seconedcard
let hasBlackJack=false
let isAlive=true
let message=""

let messageVal=document.getElementById("messageValue")
let sumEL=document.getElementById("sum-el") 
let cardEL=document.getElementById("card-el") 


let player2={
 player: "per",
 playerChips:297
}
let playEl=document.getElementById("player")

playEl.textContent=player2.player+": $"+player2.playerChips
function startGame(){
    isAlive=true
    let firstcard=getRandomCard()
    let seconedcard=getRandomCard()
     cards=[firstcard,seconedcard]
     sum=firstcard+seconedcard

    renderGame()
}
function renderGame(){
    cardEL.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardEL.textContent+=+cards[i]+" "
    }
   if(sum<21){
    message="do you want to raw a new card";
  //  console.log("do you want to raw a new card")
}
//=== taking the type
//== ignoring the data type
else if(sum===21){
    message="you got blackjack !";

   // console.log("you got blackjack !")
    hasBlackJack=true
}
else {
    isAlive=false
    message="you are out of the game ";

    // console.log("you are out of the game ")

}
sumEL.textContent="Sum: "+sum
messageVal.textContent=message
}

function card(){
    if(isAlive && !hasBlackJack)
    {
        let card=getRandomCard()
    sum+=card 
    cards.push(card);
    renderGame()  
    }
  

}

function getRandomCard(){
    let randomNum=Math.floor(Math.random()*13)+1
    if(randomNum==1)
    {
        return 11
    }
    if (randomNum>10)
    {
        return 10
    }
    else{
       return randomNum
    }
    
}