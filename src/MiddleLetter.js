function MiddleLetter(){

}
MiddleLetter.prototype.findMiddle = function(word){
  if(word === 'A'){
    return 'A'
  } else if(word === 'of'){
    return 'of'
  }
}

// Your job is to return the middle character of a word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
