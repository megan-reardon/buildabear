var closet = document.querySelector('.saved-outfit');
var outfitName = document.querySelector('input');
var saveButton = document.querySelector('#save-button');
var outfits = [];
var garmentSection = document.querySelector('.garment-option-container');
var backgroundsSection = document.querySelector('.backgrounds');
var id = Date.now(id);
var outfit = new Outfit(id);
var hatGarment;
var allGarments = [];

saveButton.addEventListener('click', saveOutfit);
backgroundsSection.addEventListener('click', backgroundsConditionals);
garmentSection.addEventListener('click', indicateButtonsAndDress);
outfitName.addEventListener('keyup', validateInput); //Adds event listener to the input field
closet.addEventListener('click', removeSavedOutfitCard);

window.onload = console.log(outfit);


function indicateButtonsAndDress() {
  runOutfitConditional(event);
  indicateActivateButton(event);

}

//This function tests to see if there is anything in the input field
function validateInput() {
  if (outfitName.value === '' || outfitName.value === 'Name this Outfit') {
    saveButton.disabled = true;
  } else { saveButton.disabled = false;

  }

}

function selectGarments(event) {
  var hatButtons = document.querySelectorAll('.hats-btn');
  // var clothesButtons = document.querySelectorAll('.clothes-btn');
  // var accesoriesButtons = document.querySelectorAll('.accessories-btn');

  for (var i = 0; i < hatButtons.length; i++) {
    if (event.target.parentElement.className === 'hats-btn')
    allGarments[0] = event.target.id;
    // console.log(allGarments);
  }
}

function saveOutfit() {
  var clearForm = document.querySelector('form');
  event.preventDefault();
  closet.insertAdjacentHTML('afterbegin', `
    <div class="saved-outfit-card">
      <p>${outfitName.value}</p>
      <img class="close" src="./assets/close.svg" alt="close-icon">
    </div>
  `);
  saveButton.disabled = true;
  clearOutfits();
  disableUnselectedButtons('.button');
  clearForm.reset();
}

function clearOutfits() {
  let garments = document.querySelectorAll('.garment-image');
  for (var i = 0; i < garments.length; i++) {
    garments[i].classList.add('hidden');
  }
}

function disableUnselectedButtons(button) {
  var disabledButton = document.querySelectorAll(button);
  for (var i = 0; i < disabledButton.length; i++) {
    disabledButton[i].classList.remove('selected-button');
  }
}

// Function to highlight button when clicked
function indicateActivateButton(event) {
  if (event.target.classList.contains('button')) {
    event.target.classList.toggle('selected-button');
  }
}

function runOutfitConditional() {
  if (event.target.classList.contains('hats-btn')) {
    selectGarments(event); // adds to garments array
    addGarments(event); // displays images on the bear
    disableUnselectedButtons('.hats-btn');
  } else if (event.target.classList.contains('clothes-btn')) {
    addGarments(event);
    disableUnselectedButtons('.clothes-btn');
  } else if (event.target.classList.contains('accessories-btn')) {
    addGarments(event);
    disableUnselectedButtons('.accessories-btn');
  }
}

function backgroundsConditionals() {
  addBackgroundImage(event);
  outfit.background = event.target.dataset.id;
  disableUnselectedButtonsBackgrounds();
}

function disableUnselectedButtonsBackgrounds() {
  var backgrounds = document.querySelectorAll('.backgrounds-btn');
  for (var i = 0; i < backgrounds.length; i++) {
    backgrounds[i].classList.remove('selected-button');
  }

  event.target.classList.replace('selected-button', 'unselected-button');
}

function removeBackgroundImage() {
  var removeBackground = document.querySelectorAll('.background-image');
  for (var i = 0; i < removeBackground.length; i++) {
    removeBackground[i].classList.add('hidden');
  }
}

function removeGarments(hats, clothes, accessories) {
  var hats = document.querySelectorAll(hats);
  var clothes = document.querySelectorAll(clothes);
  var accessories = document.querySelectorAll(accessories);
  if (event.target.classList.contains('hats-btn')) {
    for (var i = 0; i < hats.length; i++) {
      hats[i].classList.add('hidden');
    }
  } else if (event.target.classList.contains('clothes-btn')) {
    for (var i = 0; i < clothes.length; i++) {
      clothes[i].classList.add('hidden');
    }
  } else if (event.target.classList.contains('accessories-btn')) {
    for (var i = 0; i < accessories.length; i++) {
      accessories[i].classList.add('hidden');
    }
  }
}

function addGarments(event) {
  var garment = document.querySelector(`#${event.target.dataset.id}`);
  if (event.target.classList.contains('selected-button')) {
    garment.classList.add('hidden');
    event.target.classList.replace('selected-button', 'unselected-button');
  } else if (event.target.innerText === event.target.innerText) {
    removeGarments('.hat-image', '.clothes-image', '.accessories-image');
    garment.classList.remove('hidden');
    outfit.addGarment(`${event.target.dataset.id}`);
  }
}

function addBackgroundImage(event) {
  backgroundImage = document.querySelector(`#${event.target.dataset.id}`);
  if (event.target.classList.contains('selected-button')) {
    backgroundImage.classList.add('hidden');
    event.target.classList.replace('selected-button', 'unselected-button');
  } else if (event.target.innerText === `${event.target.innerText}`) {
    removeBackgroundImage();
    backgroundImage.classList.remove('hidden');
    // outfit.addGarment(`${event.target.dataset.id}`);
  }
}
//This function removed a saved outfit card
function removeSavedOutfitCard(event) {
  console.log(event.target.classList.contains('close'));
  if (event.target.classList.contains('close')) {
    console.log(event.target);
    event.target.closest('.saved-outfit-card').remove();
  }
}
