//api key = bd9674c587ca4d5188f1aa8cad7c82ed
let api_key = "bd9674c587ca4d5188f1aa8cad7c82ed";
let source = 'in';
let news_div = document.getElementById('news-column');
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${api_key}`, true);
xhr.onload = function () {
    let news = JSON.parse(this.responseText)
    news.articles.forEach(function (element, index) {
        if (element.urlToImage == undefined) {
            element.urlToImage = 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg';
        }
        let string = `
      <div class="card mb-4" style="max-width: 90vw;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.description}</p>
        <a href='${element.url}' target='_blank_'>Read more</a>
      </div>
    </div>
  </div>
</div>`
        news_div.innerHTML += string;
    });
}
xhr.send();