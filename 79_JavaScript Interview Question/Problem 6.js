// The Vowel Counter: You need to create a function that counts the number of vowels in a given  string. Consider both uppercase and lowercase vowels

function vowelCounter(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let vowelLines = [];
    let wordVowelMap = new Map(); 
  
    const words = str.split(' '); 
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let wordVowels = '';
  
      for (let j = 0; j < word.length; j++) {
        if (vowels.includes(word[j])) {
          count++;
          if (!vowelLines.includes(word[j])) {
            vowelLines.push(word[j]);
          }
          wordVowels += word[j]; 
        }
      }
  
      if (wordVowels) { 
        wordVowelMap.set(word, wordVowels); 
      }
    }
  
    return { count: count, vowels: vowelLines, wordVowelMap: wordVowelMap };
  }
  
  const text = 'Bimal is good boy. He is CHRISTAN';
  const result = vowelCounter(text);
  
  console.log(`${result.count} vowels found.`);
  console.log("Vowels found:");
  for (let i = 0; i < result.vowels.length; i++) {
    console.log(result.vowels[i]);
  }
  
  console.log("Word with Vowels are :");
  for (const [word, vowels] of result.wordVowelMap) {
    console.log(`${word}: ${vowels}`);
  }