const APIKEY = "4ee3f9f62d1144ca9677754d4b9bb0f2"
const topicInput = document.querySelector("#topicInput")


let searchTerm = "tesla"





fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&from=2023-01-16&sortBy=publishedAt&apiKey=${APIKEY}`)
    .then(response => response.json())
    .then(data => {
        
        const article = data.articles
        article.forEach((items) => {
            const img = items.urlToImage
            const title = items.title
            const description = items.description
            let wholeDate = items.publishedAt
            const date = wholeDate.slice(0,10)
            const articleLink = items.url
            //parentContainer
            const articleDiv = document.createElement("div")
            
            //image
            const articleImage = document.createElement("img")
            articleImage.src = `${img}`
            articleDiv.appendChild(articleImage)
            
            //title
            const articleTitle = document.createElement("h3")
            articleTitle.innerText = `${title}`
            articleDiv.appendChild(articleTitle)
            
            //description
            const articleDescription = document.createElement("p")
            articleDescription.id = "description"
            articleDescription.innerText = `${description}`
            articleDiv.appendChild(articleDescription)
            
            //date
            const articleDate = document.createElement("p")
            articleDate.id = "date"
            articleDate.innerText = `${date}` 
            articleDiv.appendChild(articleDate)
            
            //button
            const articleLinkToPage = document.createElement("a")
            articleLinkToPage.innerText = "READ MORE"
            articleLinkToPage.href = `${articleLink}`
            articleDiv.appendChild(articleLinkToPage)


            document.body.appendChild(articleDiv)
        })
    })