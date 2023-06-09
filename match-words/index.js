// Array of words and images
const words = [
  { word: 'Apple', img: 'images/apple.png' },
  { word: 'Banana', img: 'images/banana.png' },
  { word: 'Orange', img: 'images/orange.png' },
  { word: 'Grapes', img: 'images/grapes.png' },
  { word: 'Mango', img: 'images/mango.png' },
  { word: 'Pineapple', img: 'images/pineapple.png' }
];

// hide the hurray container
const hurrayContainer = document.getElementById('hurray-container');
hurrayContainer.style.display = "none";

// get words container
const wordsContainer = document.getElementById('words-container');
words.forEach(word => {
  const wordText = document.createElement('div');
  wordText.classList.add('word');
  wordText.id = word.word;
  wordText.innerText = word.word;
  wordsContainer.appendChild(wordText);
});

// Shuffle the array of words
words.sort(() => Math.random() - 0.5);

// Handle drop events on the word containers
const imagesContainer = document.getElementById('images-container');
words.forEach(word => {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  imageContainer.id = word.word + '-image';
  imageContainer.draggable = true;
  imageContainer.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', word.word);
  });

  const image = document.createElement('img');
  image.src = word.img;
  imageContainer.appendChild(image);

  imagesContainer.appendChild(imageContainer);
});

// Handle drop events on the word containers
const wordContainers = document.querySelectorAll('.word');

wordContainers.forEach(wordContainer => {
  wordContainer.addEventListener('dragover', (event) => {
      event.preventDefault();
  });

  wordContainer.addEventListener('drop', (event) => {
    event.preventDefault();
    const word = event.dataTransfer.getData('text/plain');
    if(word === event.target.innerText){
      
      hurrayContainer.style.display = "flex";
      setTimeout(()=>{
        document.getElementById(word).remove();
        document.getElementById(word + '-image').remove();
        // hide the hurray container again after 2 seconds.
        const hurrayContainer = document.getElementById('hurray-container');
        hurrayContainer.style.display = "none";
      }, 1000)
    }
  });
});
