function splitWords(sentence) {
  sentence = sentence.trim();

  const wordsAndSpaces = sentence.split(/(\s+)/);
  
  // Remove empty strings and trim each element
  const words = wordsAndSpaces
//   .filter(word => word.trim() !== '').map(word => word.trim());

  return words;
}

export default splitWords;
