function countWords(text) {
  // Split the input text into words (assuming words are separated by spaces).
  const words = text.split(' ');

  // Create a Map to store word counts.
  const wordCountMap = new Map();

  // Iterate through the words.
  for (const word of words) {
    // Remove leading/trailing whitespace and convert to lowercase for consistency.
    const cleanedWord = word.trim().toLowerCase();

    // Update the word count in the Map.
    if (cleanedWord) {
      if (wordCountMap.has(cleanedWord)) {
        // If the word is already in the Map, increment its count.
        wordCountMap.set(cleanedWord, wordCountMap.get(cleanedWord) + 1);
      } else {
        // If the word is not in the Map, add it with a count of 1.
        wordCountMap.set(cleanedWord, 1);
      }
    }
  }

  return wordCountMap;
}

// Example usage:
const text = "This is a sample text. This is a simple example.";
const wordCounts = countWords(text);

// Display the word counts.
wordCounts.forEach((count, word) => {
  console.log(`${word}: ${count}`);
});
