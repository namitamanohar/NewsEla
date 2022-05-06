
const questionsArray = require("../quiz_question_data.json"); 
//console.log(quizArray);

let lowScoreResponses = questionsArray.filter(question => question.percent_correct < 0.5)
let highScoreResponses = questionsArray.filter(question => question.percent_correct > 0.5)


const commonWords =[
  "the",
  "there",
  "by",
  "at",
  "and",
  "so",
  "if",
  "than",
  "but",
  "about",
  "in",
  "on",
  "the",
  "was",
  "for",
  "that",
  "said",
  "a",
  "or",
  "of",
  "to",
  "there",
  "will",
  "be",
  "what",
  "get",
  "go",
  "think",
  "just",
  "every",
  "are",
  "it",
  "were",
  "had",
  "i",
  "very",
  "",
  "is", 
  "from",
  "article",
  "sentence", 
  "which",
  "following", 
  "select",
  "as",
  "paragraph", 
  "best",
  ];
  const calculateWordRepeats = (questionResponses) => {
    let repeatedWords = {}
    let sortedRepeatedWords = []

  for(var question of questionResponses){
    //console.log(question.text)
    var textNoPunctuation = question.text.replace(/[^a-zA-Z']/g,' ').toLowerCase();
    //console.log(textNoPunctuation)
    var splitText = textNoPunctuation.split(" ");
    var wordsArray = splitText.filter(x => !commonWords.includes(x));
    //console.log(splitText)
    for (let word of wordsArray) {
      if (repeatedWords[word]) {
        repeatedWords[word]++;
      } else {
        repeatedWords[word] = 1;
      }
    }
  }
  //console.log(repeatedWords)
for(var word in repeatedWords){
  sortedRepeatedWords.push([word, repeatedWords[word]]);
}
sortedRepeatedWords.sort(function(a,b){
  return b[1] - a[1]
})
console.log(sortedRepeatedWords)
}

calculateWordRepeats(lowScoreResponses);
calculateWordRepeats(highScoreResponses);