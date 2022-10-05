function wordsUppercase(text) {
  let pattern = /\w+/g;
  let word = pattern.exec(text);
  let result = [];

  while (word !== null) {
    result.push(word[0].toUpperCase());
    word = pattern.exec(text);
  }
  console.log(result.join(`, `));
}
wordsUppercase("Hi, how are you?");
wordsUppercase("hello");
