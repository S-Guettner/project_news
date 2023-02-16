const APIKEY = "4ee3f9f62d1144ca9677754d4b9bb0f2"
let searchTerm = "tesla"

fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&from=2023-01-16&sortBy=publishedAt&apiKey=${APIKEY}`)
    .then(response => response.json())
    .then(newsData => {
        console.log(newsData)
    
    })