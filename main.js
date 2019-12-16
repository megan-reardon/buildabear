var closet = document.querySelector('.saved-outfit');
var outfitName = document.querySelector('input');
var saveButton = document.querySelector('#save-button');
var outfits = [];
var garmentOptions = document.querySelector('.garment-option-container');
var hatSection = document.querySelector('.hats')

saveButton.addEventListener('click', saveOutfit);
garmentOptions.addEventListener('click', indicateActivateButton);
hatSection.addEventListener('click', hatConditionals);


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

function indicateActivateButton(event) {
  if(event.target.classList.contains('button')) {
    event.target.classList.toggle('button-active');
  }
}

function hatConditionals() {
  addTopHat(event);
  addSunHat(event);
  addBow(event);
  addCrown(event);
}

function addTopHat(event) {
  var topHat = document.querySelector('#top-hat');
  if (event.target.innerText === 'Top hat') {
    topHat.classList.toggle('hidden');
  }
}

function addSunHat(event) {
  var sunHat = document.querySelector('#sun-hat');
  if (event.target.innerText === 'Sun hat') {
    sunHat.classList.toggle('hidden');
  }
}

function addBow(event) {
  var bow = document.querySelector('#bow');
  if (event.target.innerText === 'Bow') {
    bow.classList.toggle('hidden');
  }
}

function addCrown(event) {
  var crown = document.querySelector('#crown');
  if (event.target.innerText === 'Crown') {
    crown.classList.toggle('hidden');
  }
}




//
