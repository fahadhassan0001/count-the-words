// Write a JavaScript program that counts the number of words in a given sentence, excluding extra spaces, using a loop.

// Input: “I have a book”
// Output: 4

function countWords() {
    let sentence = prompt("Please enter a sentence:");

    sentence = sentence.trim();

    let wordCount = 0;

    if (sentence.length > 0) {

        let words = sentence.split(" ");

        for (let i = 0; i < words.length; i++) {
     
            if (words[i] !== "") {
                wordCount++;
            }
        }
    }
    alert("Total number of words: " + wordCount);
}

countWords();