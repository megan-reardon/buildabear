var closet = document.querySelector('.saved-outfit');
var outfitName = document.querySelector('input');
var saveButton = document.querySelector('#save-button');
var outfits = [];
var hats = document.querySelector('.hats');

saveButton.addEventListener('click', saveOutfit);
hats.addEventListener('click', addHat);

function saveOutfit() {
  event.preventDefault();
  closet.insertAdjacentHTML('afterbegin', `
    <div class="saved-outfit-card">
      <p>${outfitName.value}</p>
      <img class="close" src="./assets/close.svg" alt="close-icon">
    </div>
  `);
}

// Function to highlight button when clicked

function addHat(event) {
  if(event.target.innerText === 'Top hat') {
    event.target.classList.add('button-active');
  } 
}

//
