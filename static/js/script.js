//To find age and days
function ageInDays(){
    let birthYear= prompt('Your birth Year');
    let ageInDays = ((2021-birthYear)*365);
    let h1= document.createElement('h1');
    let textAnswer = document.createTextNode('You are '+ ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//generate Dog
function generateDog(){
    let image = document.createElement('img');
    let div =document.getElementById('flex-dog-gen');
    image.src= "https://cdn2.thedogapi.com/images/ByUgoQiE7.gif";
    div.appendChild(image);
}
//rock scissors and paper game

function rpsGame(yourChoice){
   console.log(yourChoice);
   var humanChoice, botChoice;
   humanChoice=yourChoice.id;
   botChoice= numberToChoice(randToRpsInt()); 
   console.log('Computer choice:', botChoice);
   results=decideWinner(humanChoice, botChoice); //bot won
   console.log(results);
   message = finalMessage(results);  // {'message: 'you won!', 'color':'green'}
   console.log(message);
   rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock','paper','scissor'][number]
}

function decideWinner(yourChoice, computerChoice){
    let rpsDatabase={
        'rock': {'scissor':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissor':0},
        'scissor': {'paper':1, 'scissor':0.5, 'rock':0},

        
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[yourChoice][computerChoice];

    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You Lose', 'color':'red'};
    }
    else if(yourScore === 0.5){
        return {'message': 'You Tied', 'color':'pink'};
    }
    else{
        return {'message': 'You Won', 'color':'blue'};
    }
    

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let imagesDatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,

    }
    //removing all image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height =150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML= "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height =150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);



}

//change color button
