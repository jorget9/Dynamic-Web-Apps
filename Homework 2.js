// The game selects a random word from a word list and makes that the secret word
// The player guesses one letter at a time, trying to figure out what the word is
// If the player guesses correctly, any instances of that letter are revealed in the secret word
// If the player guesses incorrectly, they are penalized by taking away a guess
// If a player reveals all of the letters of the secret word, they win
// If a player makes 8 incorrect guesses before solving the secret word, they lose



var wordList=["cat","hat","kick","lick","artist","painter", "athlete"];


//picks random word from array
var word = wordList[Math.floor(Math.random() * wordList.length)];
//var word= wordList[0];
//console.log(word);

//Converts word into an array of characters
var wordArray= word.split('');
//console.log(wordArray);

//Makes an array of dashes with length of word
var trials = wordArray.map(function(dash) {
  dash = "_";
  return dash;
});
//console.log(trials);


var guesses=8;
var winCheck=word.length;


function guessingGame(guess){
    //boolean to check if word has been guessed already
    var correct=false;

    //check if game has been won and stop game
    if(winCheck===0){
        console.log("You have won the game!")
        return
      }

    //check if game has been lost and stop game
    if(guesses<=1 ){
      console.log("You have lost the game.");
        return
      }

    //check if guessed letter is in the word
    for(i=0;i<wordArray.length;i++){
      if (wordArray[i]===guess && trials[i]==="_"){
        trials.splice(i,1,guess);
        console.log(trials);
        correct=true;
      }
    //check if letter was already guessed
      else if (wordArray[i]===guess){
        console.log("You have guessed this letter already")
        correct=false;
      }
      };   
    //show guesses remaining
      if(correct===false && guesses>1) {
        guesses-=1;
        console.log("You have "+guesses+" guesses remaining.")
      }
    //show is guess was correct
      else if (correct===true && guesses>1){
        winCheck-=1;
        console.log("Congrats you found a letter");
        correct=false;
      }
    
  }
console.log(trials);
guessingGame('l');
guessingGame('i');
guessingGame('c');
guessingGame('g');
guessingGame("g");
guessingGame('g');







