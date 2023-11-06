function getNumberofWords(frase) {
  console.log("Challenge 1");

  let mappedWord = {};
  frase.split(" ").forEach((word) => {
    if (!mappedWord[word.toLowerCase()]) {
      mappedWord[word.toLowerCase()] = 0;
    }
    mappedWord[word.toLowerCase()]++;
  });

  console.log(mappedWord);
  let concatWords = ``;

  Object.entries(mappedWord).forEach(
    (wordacc) => (concatWords += `${wordacc[0]}${wordacc[1]}`)
  );

  console.log(concatWords);
}

getNumberofWords("gato perro perro coche Gato peRRo sol");
