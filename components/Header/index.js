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
    //create element
    let headerDiv = document.createElement('div');
    let headerDate = document.createElement('span');
    let headerTitle = document.createElement('h1');
    let headerTemp = document.createElement('span');

    //structure
    headerDiv.appendChild(headerDate);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(headerTemp);

    // styles
    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    //content
    headerDate.textContent = 'SMARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';

    //return
    return headerDiv;

}

let headerContainer = document.querySelector('.header-container');

//append header to headerContainer
headerContainer.appendChild(Header());