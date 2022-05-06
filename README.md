# Quiz Question Data Analysis 

In my analysis low scoring questions were defined as less than 50% and high scoring questions were defined as higher than 50%. 

There was an array of common words that was used to sanitize the results. Some common words related to reading comprehension questions that were removed from the results were article, sentence, which, following, select, paragraph, and best. The words selected can be modified based on the analyzer's discretion. 

From my analysis, the words most commonly found in the low scoring responses were read, not, all, why, except, does, section, idea, show, word, and how. 

The words most commonly found in the high scoring responses were read, why, word, not, how, does, all, according, except, above and section. 

A brief breakdown of my solution follows: 
1) I began by using the require function to import the JSON which containd an array of objects. The object was composed of the text property and the percent_correct property. The array was stored into a variable called questionsArray. 
2) Using the array method filter, the questionsArray was filtered to greater than 50 % for high scoring questions and less than 50% for low scoring questions. 
3) An array of commonWords is created for use later on in the function 
4) A function is created called calculateWordRepeats that takes in the parameter of questionResponses-- the array of objects of either high or low questions when the function is called/executed. 
5) In the function, a for loop iterates over each object in the array and cleans up the text by first removing the punctuation using regex and making all characters lowercase, then removing spaces using the split method which returns an array of words, and then filtering those words to remove the commonWords using the filter method. 6) Now that I have the wordsArray, this array will be iterated over to find the repeatedWords. The key and value will be pushed into the repeatedWords object. If the word already exists it will add 1 to the value otherwise it will be added as another property to the repeatedWords object with a value of 1.
7)Lastly, the object needs to be sorted to show the words with the highest values first. This is done by converting the object into an array and pushing it into the sortedRepeatedWords array. The sortedRepeatedWords array is sorted using the sort method. Theis array is then consoled for analysis of most frequent word. 
8) Function is then called passing in the lowScoreResponses and the highScoreResponses.

