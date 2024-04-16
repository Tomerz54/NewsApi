var apiKey  = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=3cc195e9f19049b49dd967bb3abd1188';

var req = new Request(apiKey);
fetchNews(req);

async function fetchNews(req) {
    try{
        const res = await fetch(req);
        if(!res.ok){
            throw new Error("could not fetch news");
        }

        const jsonResponse = await res.json();
        const articles = jsonResponse.articles;
        const randomArticle = Math.floor(Math.random() * articles.length);
        console.log(articles[randomArticle]);

        /*setting up the text and the links and the image*/

        /*text + link + image */
        const authorText = document.getElementById("authorText");
        const contentText = document.getElementById("contentText");
        const descriptionText = document.getElementById("descriptionText");
        const publishedAtText = document.getElementById("publishedAtText");
        const titleText = document.getElementById("titleText");
        const urlText = document.getElementById("urlText");
        const imageText = document.getElementById("imageText");
        
        /*setting up the text and the links and the image*/ 
        authorText.textContent = articles[randomArticle].author;
        contentText.textContent = articles[randomArticle].content;
        descriptionText.textContent = articles[randomArticle].description;
        publishedAtText.textContent = articles[randomArticle].publishedAt;
        titleText.textContent = articles[randomArticle].title
        urlText.href = articles[randomArticle].url;
        imageText.src = articles[randomArticle].urlToImage;
        
    }

    
    catch(err){
        console.error(err);
    }
}

