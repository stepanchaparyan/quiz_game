//creates variable for counter and sets it to zero to start.
var quizScore = 0;

//Creates answer bank to test responses to.
var questionOneAnswer = 'HARRISBURG';
var questionTwoAnswer = 'COLUMBUS';
var questionThreeAnswer = 'ALBANY';
var questionFourAnswer = 'PROVIDENCE';
var questionFiveAnswer = 'BOSTON';

function quiz () {
//Creates variable for holding what the person guesses as the answer.
//Also changes their guess to uppercase to avoid any capitalization errors.
//Tests the guess against the answer and increases score if they get it right.
var questionOneGuess = prompt('Question 1: What is the capital of Pennsylvania?');
if (questionOneGuess.toUpperCase() === questionOneAnswer) {
quizScore = quizScore + 1;
alert('That is correct!');
} else {
alert('Sorry that is incorrect.');
}

var questionTwoGuess = prompt('Question 2: What is the capital of Ohio?');
if (questionTwoGuess.toUpperCase() === questionTwoAnswer) {
quizScore = quizScore + 1;
alert('That is correct!');
} else {
alert('Sorry that is incorrect.');
}

var questionThreeGuess = prompt('Question 3: What is the capital of New York?');
if (questionThreeGuess.toUpperCase() === questionThreeAnswer) {
quizScore= quizScore + 1;
alert('That is correct!');
} else {
alert('Sorry that is incorrect.');
}

var questionFourGuess = prompt('Question 4: What is the capital of Rhode Island?');
if (questionFourGuess.toUpperCase() === questionFourAnswer) {
quizScore = quizScore + 1;
alert('That is correct!');
} else {
alert('Sorry that is incorrect.');
}

var questionFiveGuess = prompt('Question 5: What is the capital of Massachusetts?');
if (questionFiveGuess.toUpperCase() === questionFiveAnswer) {
quizScore = quizScore + 1;
alert('That is correct!');
} else {
alert('Sorry that is incorrect.');
}
}

function results () {
//Determines the player's score by testing how many they got correct.
if (quizScore === 5) {
document.write('<p>You win the gold crown with a score of ' + quizScore + ' correct answers.</p>');
} else if (quizScore === 4 || quizScore === 3) {
document.write('<p>You win the silver crown with a score of ' + quizScore + ' correct answers.</p>');
} else if (quizScore === 2 || quizScore === 1) {
document.write('<p>You win the bronze crown with a score of ' + quizScore + ' correct answers.</p>');
} else {
document.write("<p>You haven't won any crown. You answered " + quizScore + " questions correctly.</p>");
}
}

function hideAndShow() {
  document.getElementById('start-page').style.display='none';
  document.getElementById('quiz-questions').style.display='block';
  document.getElementById('quiz-image').style.display='block';
  document.getElementById('quiz-nav').style.display='block';
  document.getElementById('quiz-answers').style.display='block';
  document.getElementById('quiz-result').style.display='block';
}

const data = [
  {
    "name": "Armenia",
    "capital": "Yerevan",
    "answer": "right"
},
{
  "name": "Georgia",
  "capital": "Moscow",
}
];

function questions() {
  document.getElementById("quiz-questions").innerHTML = "The capital city of " + data[0].name + " is " + data[0].capital;
}

function testRight () {
  if (data[0].answer == "right") {
    document.getElementById("quiz-result").innerHTML = "You are right";
  } else {
    document.getElementById("quiz-result").innerHTML = "You are wrong";
  }
}

function testWrong () {
  if (data[0].answer == "right") {
    document.getElementById("quiz-result").innerHTML = "Sorry but " + data[0].capital + " is the capital of " + data[0].name;
  } else {
    document.getElementById("quiz-result").innerHTML = "You are right, " + data[0].capital + "is not the capital of " + data[0].name;
  }
}

function start () {
  hideAndShow();
  questions();
//  quiz();
//  results();
}
