var closet = document.querySelector('.saved-outfit');
var outfitName = document.querySelector('input');
var saveButton = document.querySelector('#save-button');
var outfits = [];
var garmentOptions = document.querySelector('.garment-option-container');


saveButton.addEventListener('click', saveOutfit);
garmentOptions.addEventListener('click', indicateActiveButton);

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

function indicateActiveButton(event) {
  if(event.target.classList.contains('button')) {
    event.target.classList.toggle('button-active');
 }
}


  //
