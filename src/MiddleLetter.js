function MiddleLetter(){

}
MiddleLetter.prototype.findMiddle = function(word){
  if(word.length < 3){
    return word;
  } else if(word.length === 3) {
    return word.charAt(1);
  } else if(word.length === 4) {
    return word.charAt(1)+word.charAt(2);
  };
};

// Your job is to return the middle character of a word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
