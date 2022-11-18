var readlineSync = require("readline-sync");
var username = readlineSync.question("May I know your name? ");
console.log("Welcome " + username + " to FOUNDERS QUIZ!")
var userScore = 0;
var questionList = [
  {
    question: "Who invented C language? ",
    answer: "Dennis Ritchie"
  },
  {
    question: "Who founded C++? ",
    answer: "Bjarne Stroustrup"
  },
  {
    question: "Who is the creator of Java? ",
    answer: "James Gosling"
  },
  {
    question: "Who is the creator of Python ",
    answer: "Guido van Rossum"
  },
  {
    question: "Who created HTML? ",
    answer: "Tim Berner-Lee"
  },
  {
    question: "Who co-founded Javascript? ",
    answer: "Brendan Eich"
  },
  {
    question: "Who designed Ruby? ",
    answer: "Yukihiro Matsumoto"
  },
  {
    question: "Who designed and developed Perl? ",
    answer: "Larry Wall"
  },
  {
    question: "Who created PHP? ",
    answer: "Rasmus Lerdorf"
  }
]

var highScores = [
  {
    name: "Tyler",
    score: 8
  },
  {
    name: "Ellie",
    score: 7
  }
]

function play(question, answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("You are right!");
    userScore++;
  }
  else
  {
    console.log("You are wrong!");
  }
  console.log("Score is: "+ userScore);
  console.log("-----------------");
}

for(var i = 0; i < questionList.length; i++)
{
  play(questionList[i].question, questionList[i].answer);
}

console.log("YAY! Your Score is: "+ userScore);
var highest = 0;
for(var i = 0; i < highScores.length; i++)
{
  if(highest < highScores[i].score)
  {
    highest = highScores[i].score;
  }
}

if(userScore > highest)
{
  console.log("Hooray! You have beaten the high score!");
  console.log("Send screenshot of your score to get your score updated in high scores list.");
}
