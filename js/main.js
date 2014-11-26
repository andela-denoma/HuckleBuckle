
//JAVASCRIPT FOR GAME STARTS HERE
var hotCold = {
  computerGuess: null,
  output:document.getElementById('output'),
  userGuess: document.getElementById('guess'),
  previousGuess: 101,
  max:100,
  min:1,

  //INITIALIZE THE GAME
  initialize: function(){
    this.computerGuess = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    console.log("computerGuess: " + this.computerGuess);
  },

  //TO VALIDATE THE FORM
  validate: function(){
    var guess= document.getElementById('guess').value;

    if(isNaN(guess)){
      output.innerHTML = 'Enter a valid number';
      return true;
    }
    else if (parseInt(guess) > 100 || parseInt(guess) < 1){
       output.innerHTML = 'Your guess is out of the 1 to 100 range';
       return false;
    } 
    else {
      return true;
    }
  },

  //TO PLAY THE GAME
  replay: function(){
    var userInput = document.getElementById('guess');
    var numUserInput = parseInt(userInput.value)
    if(!this.validate())
      return;
    else if(this.computerGuess === numUserInput){
      output.innerHTML = 'You guessed it';
    }
    else if(Math.abs(this.computerGuess - numUserInput) > Math.abs(this.computerGuess - this.previousGuess)){
      output.innerHTML = 'You are getting colder';
    }
    else if( Math.abs(this.computerGuess - numUserInput) < Math.abs(this.computerGuess - this.previousGuess)){
      output.innerHTML = 'You are getting hotter';

    }
    else if(Math.abs(numUserInput === this.previousGuess)){
      output.innerHTML = 'You are getting neither hotter nor colder';
    }
    this.previousGuess = numUserInput; 
  }
};

hotCold.initialize();

document.getElementById('submit').addEventListener("click", function(e){
  e.preventDefault();
  hotCold.replay();
});


  

   

    



