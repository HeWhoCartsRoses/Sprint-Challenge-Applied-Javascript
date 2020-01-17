// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let parent = document.createElement('div')
    let date = document.createElement('span')
    let title = document.createElement('h1')
    let temp = document.createElement('span')
    parent.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')
    date.textContent = `MARCH 28, 2019`
    title.textContent = `Lambda Times`
    temp.textContent = `98`
    parent.appendChild(date)
    parent.appendChild(title)
    parent.appendChild(temp)
    return parent;
}
let dumb = document.querySelector('.header-container')
dumb.appendChild(Header());