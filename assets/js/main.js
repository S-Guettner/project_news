const APIKEY = "1432a29635d04cdf9fb92407142cabc4"
const topicInput = document.querySelector("#topicInput")
const mainContainer = document.querySelector("main")
const allDivs = mainContainer.getElementsByTagName("div")
const languageInput = document.querySelector("#languageInput")


let searchTerm = "bmw" 
let language = "de"

languageInput.addEventListener('change' , (e) => {
    language = e.target.value
    removeElements()
    dataFetch()
})

const removeElements = () => {
    while(allDivs.length > 0) {
        allDivs[0].remove()
    }
}

const searchButton = document.querySelector("#searchButton").addEventListener('click', () =>{
    searchTerm = topicInput.value
    removeElements()
    dataFetch()
})

const categorieDataFetch = (topic) =>{
    removeElements()
    let categorie = topic
    fetch(`https://newsapi.org/v2/top-headlines?country=de&category=${categorie}&apiKey=${APIKEY}`)
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

            document.querySelector("main").appendChild(articleDiv)
            /* document.body.appendChild(articleDiv) */
        })
    })
}


const dataFetch = () => {

    fetch(`https://newsapi.org/v2/everything?language=${language}&q=${searchTerm}&from=2023-01-17&sortBy=publishedAt&apiKey=${APIKEY}`)
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

            document.querySelector("main").appendChild(articleDiv)
            /* document.body.appendChild(articleDiv) */
        })
    })
}

dataFetch()




