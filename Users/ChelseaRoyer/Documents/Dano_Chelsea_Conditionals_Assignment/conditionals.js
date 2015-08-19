//this is my js file, August, 19th, 2015. Chelsea Dano. 
alert ("This works!");

//Name;Chelsea Dano. Date;August 19, 2015. Conditionals Assignment.

var lottoWinner=true;
  //If I win the lottery, then I can invest in real estate.
If(lottoWinner){
  console.log("I can invest in real estate!");
  //this is the code that will run if the condition ring true.
}else{ 
  console.log("Time to save every penny, because your income is not expendable!");
  //This is the code that will run if this is false.
} 

//Using an array to show what bills to pay. Or rather, to show what I will not have to pay in the event that I win.
var billsToPay=[300,130,25,62,210];
var total=billsToPay[0]+billsToPay[1]+billsToPay[2]+billsToPay[3]+billsToPay[4];
  console.log(total);
alert("I have +"total"+ dollars to pay."); //not sure if this is going to use the variable the way I want...

//Another conditional statement.
var jackPot=true;
  //If I get a jackPot, I would be worry free about my bills. Lets test this to see if I win what will be true.
var bills=$727;  //Is it okay to use the $ Symbol??
if(jackPot){
  console.log("I won't have stress over money!");
}else{
  console.log("You must budget.");
}
//And this next calculator is exhibiting what we can and cannot do now, depending on how much we have..

var mustang= $40,000;
var newHome=$350,000;
var vacationHome=$100,000;
var jackPot=$100,000,000;
//Here are our variables; Again I'm not sure if it's okay to use the $.
if("mustang"+"house"+"vacationHome"<jackPot){
  console.log("I can purchase these things.");
}else{
  console.log("Make some sacrafices.");
} 
//This is my segment where i"m incorperating my logical operator..
var mustang=$40,000;
var house=$350,000;
var jackPot=$500,000;
//Going to use the or operator, only one of the statments need to be true for the code to run.
if("mustang"+"house"<jackPot||jackPot<"mustang"/"house"){
//only one needs to be true..
  console.log("I have a new house and car!");
}
//and for my ternary operator.
var moneyLeft=$56;
//if under $50, then we can buy groceries.
(moneyLeft>$50)?console.log("You eat!"):console.log("You starve!");
