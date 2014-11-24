var maxNum = 100;

var hotCold = {
  guess: document.getElementsByTagName("button")[0], //click event
  reset: document.getElementById("reset"),
  inputBox: document.getElementById('guess_number'),
  initNum: 0,
  random: Math.floor(Math.random() * (maxNum - 0 + 1) + 0),
  userInput: document.getElementById("guess_number").value,
  
  initialize: function() {

   //Prevent browser default onclick behaviour
   hotCold.guess.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("Submit Guess");
      hotCold.play();
   });

  // Bind a click of the reset button to browser reload
  hotCold.reset.addEventListener("click", function (event) {
      event.preventDefault();
      location.reload();
   });

  // Bind enter key to the gameplay object function for browsers that don't always interpret an enter press as a form submission.
  hotCold.inputBox.addEventListener('keypress', function(e) {
     if (e.which == 13) {
      hotCold.play(); 
      }
  });
  },

  //VALIDATE USERS INPUT
  numValidate: function(userInput) {

    if(userInput === " " || isNaN(userInput)){
      document.getElementById("demo").innerHTML = "Please Enter a valid Number";
    }
    else if(0 > userInput){
      document.getElementById("demo").innerHTML = "You have to use positive Numbers";
    }
    else if(userInput > maxNum){
      document.getElementById("demo").innerHTML = "Your Number Should be within a range of One(1) to Hundred(100)";
    }
    else{
      return true;
    }
    return false;
    },

  //GAME CONFIGURATION
  play: function(userInput) {
   
    var userInput = parseInt(document.getElementById('guess_number').value, 10);
    if(!hotCold.numValidate(userInput)){
      return;
    }
    if(userInput == hotCold.random){
      document.getElementById("demo").innerHTML = "You Guessed It.";
      $("body").css("background-image", "url(img/backimg.jpg)");
    }
    else if(Math.abs(hotCold.random - userInput) > Math.abs(hotCold.random - this.initNum)){
      document.getElementById("demo").innerHTML = "You're getting cold!";
      $("body").css("background-image", "url(img/cold.jpg)");
    }
    else if(Math.abs(hotCold.random - userInput) < Math.abs(hotCold.random - this.initNum)){
      document.getElementById("demo").innerHTML = "You're getting Warm";
      $("body").css("background-image", "url(img/hotimg.jpg)");
    }

    this.initNum = userInput;
    console.log(this.random);
    }

   }

      
    window.onload = function(){
    hotCold.initialize();
    }