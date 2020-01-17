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
let page = document.querySelector('.card')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //   Object.values(response.articles)
        let names = Object.keys(response.data.articles);
        console.log(names)
        for (var i = 0; i < names.length; i++) {
            let that = name[i];
            for (var i = 0; i < response.data.articles.that.length; i++) {
                console.log(Object.values(response.data.articles.that[i]));
            }
        }
    })
    .catch(error => {
        console.log("the data was not returned", error)
    })
function creation(arr) {
    let parent = document.createElement('div')
    let writ = document.createElement('div')
    let Cont = document.createElement('div')
    let pic = document.createElement('img')
    let name = document.createElement('span')
    parent.classList.add('headline')
    writ.classList.add('author')
    Cont.classList.add('img-container')
    Image.src = (`${arr.authorPhoto}`)
    parent.textContent = `${arr.headline}`;
    writ.textContent = `${arr.authorName}`;
    name.textContent = `By ${arr.authorName}`;
    writ.appendChild(info)
    info.appendChild(title)
    info.appendChild(user)
    info.appendChild(location)
    info.appendChild(profile)
    info.appendChild(followers)
    info.appendChild(following)
    info.appendChild(bio)
    return parent;
}