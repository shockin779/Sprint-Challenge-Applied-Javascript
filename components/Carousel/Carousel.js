/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {

  let imgIndex = 0;

  // Create
  let carousel = document.createElement('div');
  let leftButton = document.createElement('div');
  let img1 = document.createElement('img');
  let img2 = document.createElement('img');
  let img3 = document.createElement('img');
  let img4 = document.createElement('img');
  let rightButton = document.createElement('div');

  let imgArr = [img1, img2, img3, img4];
  
  // Style
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // Structure
  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  // Content
  leftButton.textContent = ' < ';
  rightButton.textContent = ' > ';
  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';

  // Display first image by default
  img1.style.display = 'block';

  // Create event listner for left click
  leftButton.addEventListener('click', event => {
    imgArr[imgIndex].style.display = 'none';
    imgIndex -= 1;
    if(imgIndex < 0) { imgIndex = 3 }
    imgArr[imgIndex].style.display = 'block';
  })

  // Create event listener for right click
  rightButton.addEventListener('click', event => {
    imgArr[imgIndex].style.display = 'none';
    imgIndex += 1;
    if(imgIndex > 3) { imgIndex = 0 }
    imgArr[imgIndex].style.display = 'block';
  })


  // Return
  return carousel;
}

let carouselContainer = document.querySelector('.carousel-container');

carouselContainer.appendChild(createCarousel());