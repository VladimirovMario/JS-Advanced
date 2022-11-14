// function getArticleGenerator(articles) {
//   let div = document.getElementById(`content`);

//   return function () {
//     const currArticle = articles.shift();

//     if (currArticle !== undefined) {
//       let article = document.createElement(`article`);
//       article.textContent = currArticle;
//       div.appendChild(article);
//     }
//   };
// }

function getArticleGenerator(articles) {
  let div = document.getElementById(`content`);
  let index = 0;

  function showNext() {
    if (index >= articles.length) {
      return;
    }
    let article = document.createElement(`article`);
    article.textContent = articles[index++];
    div.appendChild(article);
  }
  return showNext;
}
