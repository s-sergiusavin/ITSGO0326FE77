export function updateNewsList(markup) {
  document.getElementById("articlesWrapper").innerHTML = markup;
}

export function createMarkup({ author, title, description, url, urlToImage }) {
  if (!urlToImage) {
    urlToImage =
      "https://ziggyfamily.com/cdn/shop/files/10-choses-a-savoir-sur-Garfield-chat.png?v=1728563015&width=1000";
  }
  if (!author) {
    author = "Lorem ipsum";
  }

  if (!title) {
    title = "Aici ar pute fi titlul tau";
  }
  return `
    <div class="article-card">
        <h2 class="article-title"> ${title} </h2>
        <h3 class="article-author"> ${author} </h3>
        <img src=${urlToImage} class="article-img">
        <p class="article-description"> ${description} </p>
        <a href=${url} class="article-link" target="_blank"> Read more </a>
    </div>
    `;
}

const test = `
    <div class="article-card">
        <h2 class="article-title">ceva</h2>
        <h3 class="article-description">ceva</h3>
        <img src="" class="article-img">
        <p class="article-description">ceva</p>
        <a href="" class="article-link" target="_blank"></a>
    </div>
`;
