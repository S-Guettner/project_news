const APIKEY = "c296de1e76b94e48bba47d88a5535faa"
const topicInput = document.querySelector("#topicInput")
const mainContainer = document.querySelector("main")
const allDivs = mainContainer.getElementsByTagName("div")
const languageInput = document.querySelector("#languageInput")

//input variables
let searchTerm = "bmw" 
let language = "de"

//language selection
languageInput.addEventListener('change' , (e) => {
    language = e.target.value
    removeElements()
    dataFetch()
})
//removes elements to show only new articles
const removeElements = () => {
    while(allDivs.length > 0) {
        allDivs[0].remove()
    }
}
//takes search input and fetches data from API
const searchButton = document.querySelector("#searchButton").addEventListener('click', () =>{
    searchTerm = topicInput.value
    removeElements()
    dataFetch()
})
//takes categorie input and fetches data from API
//takes selected language on change
const categorieDataFetch = (topic) =>{
    let categorie = topic
    searchTerm = topic
    removeElements()
    languageInput.addEventListener('change' , (e) => {
        language = e.target.value
        removeElements()
        categorieDataFetch(topic)
    })
    //categorie data fetch
    fetch(`http://newsapi.org/v2/top-headlines?country=${language}&category=${categorie}&apiKey=${APIKEY}`)
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
        })
    })
}


const dataFetch = () => {
    //topic data fetch
    fetch(`http://newsapi.org/v2/everything?language=${language}&q=${searchTerm}&from=2023-01-17&sortBy=publishedAt&apiKey=${APIKEY}`)
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
        })
    })
}
//fetches data with topic from searchTerm variable
dataFetch()




