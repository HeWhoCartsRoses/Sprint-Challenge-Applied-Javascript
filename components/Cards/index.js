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
let page = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //   Object.values(response.articles)

        for (var i = 0; i < response.data.articles.javascript.length; i++) {
            let name = (Object.values(response.data.articles.javascript[i]))
            page.append(creation(name));
        }
        for (var i = 0; i < response.data.articles.bootstrap.length; i++) {
            let name = (Object.values(response.data.articles.bootstrap[i]))
            page.append(creation(name));
        }
        for (var i = 0; i < response.data.articles.technology.length; i++) {
            let name = (Object.values(response.data.articles.technology[i]))
            page.append(creation(name));
        }
        for (var i = 0; i < response.data.articles.jquery.length; i++) {
            let name = (Object.values(response.data.articles.jquery[i]))
            page.append(creation(name));
        }
        for (var i = 0; i < response.data.articles.node.length; i++) {
            let name = (Object.values(response.data.articles.node[i]))
            page.append(creation(name));
        }
    })
    .catch(error => {
        console.log("the data was not returned", error)
    })
function creation(arr) {
    let parents = document.createElement('div')
    let parent = document.createElement('div')
    let writ = document.createElement('div')
    let Cont = document.createElement('div')
    let pic = document.createElement('img')
    let name = document.createElement('span')
    parents.classList.add('card')
    pic.src = (`${arr[1]}`)
    parent.textContent = `${arr[0]}`;
    writ.textContent = `${arr[2]}`;
    name.textContent = `By ${arr[2]}`;
    parent.classList.add('headline')
    writ.classList.add('author')
    Cont.classList.add('img-container')
    parents.appendChild(parent)
    parents.appendChild(writ)
    writ.appendChild(pic)
    writ.appendChild(name)
    return parent;
}