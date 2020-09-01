var POSSIBLE_WORDS=['obdurate', 'verisimilitude', 'defenestrate', 'obsequious', 'dissonant', 'today', 'idempotent', 'happy', 'jieun', 'document', 'mamamoo','chocolate','sugar'];
var MAX_GUESSES = 6;

var guesses = '';
var guessCount = MAX_GUESSES;
var word;

function newGame(){
  word = POSSIBLE_WORDS[Math.floor((Math.random()*(POSSIBLE_WORDS.length - 1))+1)];
  guessCount=MAX_GUESSES;
  guesses = '';
  document.getElementById('guessbutton').disabled = false;
  updatePage();
}
function guessLetter(){
  var letter = document.getElementById('hguess').value;
  var i;
  for(i=0; i<guesses.length; i++){
    if(guesses[i] == letter) return;
  }
  guesses += letter;
  if(word.indexOf(letter)<0) guessCount--;

  updatePage();
}

function updatePage(){
  var str='', i;
  for(i=0; i<word.length; i++){
    str+='_';
  }
  var temp = str.split('');
  for(i=0; i<guesses.length; i++){
    var idx = word.indexOf(guesses[i]);
    if(idx<0) continue;
    while(idx>=0){
      temp[idx] = guesses[i];
      idx = word.indexOf(guesses[i], idx+1);
    }
  }
  str = (temp.join(' ')).replace(/,/g, '');
  document.getElementById('clue').innerHTML =str;
  if(guessCount==0) document.getElementById('guessstr').innerHTML = "YOU LOSE";
  else if(str.indexOf('_')<0) document.getElementById('guessstr').innerHTML = "YOU WIN";
  else document.getElementById('guessstr').innerHTML = "GUESSED: "+guesses;
  switch(guessCount){
    case 6: document.getElementById('hangmanpic').src = 'img/h1.JPG'; break;
    case 5: document.getElementById('hangmanpic').src = 'img/h2.JPG'; break;
    case 3: document.getElementById('hangmanpic').src = 'img/h4.JPG'; break;
    case 4: document.getElementById('hangmanpic').src = 'img/h3.JPG'; break;
    case 2: document.getElementById('hangmanpic').src = 'img/h5.JPG'; break;
    case 1: document.getElementById('hangmanpic').src = 'img/h6.JPG'; break;
  }
}
