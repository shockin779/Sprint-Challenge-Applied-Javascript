// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createArticle(articleObject) {
    console.log(articleObject);

    articleObject[1].forEach(article => {
        // Create
        let articleCard = document.createElement('div');
        let articleHeadline = document.createElement('div');
        let articleAuthorDiv = document.createElement('div');
        let articleImgContainer = document.createElement('div');
        let articleImg = document.createElement('img');
        let articleAuthor = document.createElement('span');

        // Structure
        articleCard.appendChild(articleHeadline);
        articleCard.appendChild(articleAuthorDiv);
        articleAuthorDiv.appendChild(articleImgContainer);
        articleImgContainer.appendChild(articleImg);

        // Style
        articleCard.classList.add('card');
        articleHeadline.classList.add('headline');
        articleAuthorDiv.classList.add('author');
        articleImgContainer.classList.add('img-container');

        // Content
        articleCard.setAttribute('data-topic', articleObject[0]);
        articleHeadline.textContent = article.headline;
        articleImg.src = article.authorPhoto;
        articleAuthor = `By ${article.authorName}`;

        // Put on DOM
        articleEntryPoint.appendChild(articleCard);
    });
}

async function getArticles() {
    let articles = await axios.get('https://lambda-times-backend.herokuapp.com/articles');
    console.log(articles)
    
    // Filter results down to the Articles object
    articles = articles.data.articles;
    let articlesArr = Object.entries(articles);
    
    articlesArr.forEach(article => createArticle(article));
    
}

let articleEntryPoint = document.querySelector('.cards-container');

getArticles();