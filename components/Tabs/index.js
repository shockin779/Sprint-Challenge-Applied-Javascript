// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTopicTab(topicName) {
    // Create
    let tab = document.createElement('div');
    
    // Style
    tab.classList.add('tab');

    // Content
    tab.textContent = topicName;

    // Create click event listener
    tab.addEventListener('click', event => {
        if(tab.classList.contains('active-tab')) {

        } else {
            document.querySelector('.active-tab').classList.remove('active-tab');
            tab.classList.add('active-tab')
        }
    });

    // Return
    return tab;

}


async function getTopics() {
    // Make a get request for the topics
    let topics = await axios.get('https://lambda-times-backend.herokuapp.com/topics');
    
    // Filter results down to the topics array
    topics = topics.data.topics;

    topics.forEach(topic => topicsContainer.appendChild(createTopicTab(topic)));
    tabs = document.querySelectorAll('.tab');
}


// Grab the topics container
let topicsContainer = document.querySelector('.topics');

// Grab the tabs so we can toggle things

getTopics();