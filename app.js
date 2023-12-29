let choices = document.querySelectorAll(".image");
let myScore = document.querySelector("#ce");
let comScore =document.querySelector("#com");
let result = document.querySelector('h2');

let UserScore = 0;
let CScore = 0;

const comChoice = ()=>{
let array =['rock','paper','scissors'];
let value = Math.floor(Math.random() * 3);
return array[value];
}




const playGame = (userChoice)=>{
  let Comvalue =comChoice()

  if(userChoice === Comvalue){
  result.innerText = 'Game is Draw! Play Again.'
  result.style.background = "black"
  }
  else{
    let userwon =true;
    if(userChoice ==="rock"){
      userwon = Comvalue === "paper" ? false :true;
    }
    else if (userChoice ==="paper"){
      userwon = Comvalue === "scissor" ? false:true;
    }
    else{
      userwon = Comvalue === "rock" ? false:true;
    }
    showWinner(userwon);

  }
  
}


choices.forEach((choice) => {
  choice.addEventListener('click',()=>{
    let userChoice = choice.getAttribute("id");
    playGame(userChoice)
  })
});




const showWinner =(userwon)=>{
  if(userwon){
    result.innerText = "You Win!";
    result.style.background = "green";
    UserScore+=1;
    myScore.innerText = UserScore;

  }
  else{
    result.innerText = "You Lose!";
    result.style.background = "red"
    CScore+=1;
    comScore.innerText = CScore;
  }
}
/*condition 
1st - user === com => Draw
2nd user {paper}  === com {rock} => user Win  ..... user{paper} === com{scissor} => com win
3rd user {rock} === com { paper} => com win ...... user { rock}  === com{scissos} =>  user win
4th user{scissor} === com{paper} => user win ...... user{scissor} === com{rock} ===> com win */