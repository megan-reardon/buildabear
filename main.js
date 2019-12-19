var closet = document.querySelector('.saved-outfit');
var outfitName = document.querySelector('input');
var saveButton = document.querySelector('#save-button');
var outfits = [];
var garmentSection = document.querySelector('.garment-option-container');
var hatSection = document.querySelector('.hats');
var clothesSection = document.querySelector('.clothes');
var accessoriesSection = document.querySelector('.accessories');
var backgroundsSection = document.querySelector('.backgrounds');
var id = Date.now(id);
var outfit = new Outfit(id);
var hatGarment;

saveButton.addEventListener('click', saveOutfit);
hatSection.addEventListener('click', hatConditionals);
clothesSection.addEventListener('click', clothesConditionals);
accessoriesSection.addEventListener('click', accessoriesConditionals);
backgroundsSection.addEventListener('click', backgroundsConditionals);
garmentSection.addEventListener('click', indicateActivateButton);
outfitName.addEventListener('keyup', validateInput); //Adds event listener to the input field

window.onload = console.log(outfit);

//This function tests to see if there is anything in the input field
function validateInput() {
  if (outfitName.value === '' || outfitName.value === 'Name this Outfit') {
    saveButton.disabled = true;
  } else { saveButton.disabled = false;

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
  removeAllGarments();
  clearForm.reset();
}

function removeAllGarments() {
  removeHatGarment();
  removeClothesGarment();
  removeAccessoriesGarment();
  removeBackgroundImage();
}

// Function to highlight button when clicked
function indicateActivateButton(event) {
  if (event.target.classList.contains('button')) {
    event.target.classList.toggle('selected-button');
  }
}

function hatConditionals() {
  if (event.target.classList.contains('hats-btn')) {
    addHatGarment(event);
    disableUnselectedButtonsHats(event);
  }

}

function clothesConditionals() {
  if (event.target.classList.contains('clothes-btn')) {
    addClothesGarment(event);
    disableUnselectedButtonsClothes(event);
  }
}

function accessoriesConditionals() {
  if (event.target.classList.contains('accessories-btn')) {
    addAccessoriesGarment(event);
    disableUnselectedButtonsAccessories();
    console.log(outfit.garments);
  }
}

function backgroundsConditionals() {
  addBackgroundImage(event);
  disableUnselectedButtonsBackgrounds();
}

// Function to change button color when garment is selected

function disableUnselectedButtonsHats() {
  var hats = document.querySelectorAll('.hats-btn');
  for (var i = 0; i < hats.length; i++) {
    hats[i].classList.remove('selected-button');
  }

  event.target.classList.replace('selected-button', 'unselected-button');
}

function disableUnselectedButtonsClothes() {
  var clothes = document.querySelectorAll('.clothes-btn');
  for (var i = 0; i < clothes.length; i++) {
    clothes[i].classList.remove('selected-button');
  }

  event.target.classList.replace('selected-button', 'unselected-button');
}

function disableUnselectedButtonsAccessories() {
  var accessories = document.querySelectorAll('.accessories-btn');
  for (var i = 0; i < accessories.length; i++) {
    accessories[i].classList.remove('selected-button');
  }

  event.target.classList.replace('selected-button', 'unselected-button');
}

function disableUnselectedButtonsBackgrounds() {
  var backgrounds = document.querySelectorAll('.backgrounds-btn');
  for (var i = 0; i < backgrounds.length; i++) {
    backgrounds[i].classList.remove('selected-button');
  }

  event.target.classList.replace('selected-button', 'unselected-button');
}

function removeHatGarment() {
  var removeHats = document.querySelectorAll('.hat-image');
  for (var i = 0; i < removeHats.length; i++) {
    removeHats[i].classList.add('hidden');
  }
}

function removeClothesGarment() {
  var removeClothes = document.querySelectorAll('.clothes-image');
  for (var i = 0; i < removeClothes.length; i++) {
    removeClothes[i].classList.add('hidden');
  }
}

function removeAccessoriesGarment() {
  var removeAccessories = document.querySelectorAll('.accessories-image');
  for (var i = 0; i < removeAccessories.length; i++) {
    removeAccessories[i].classList.add('hidden');
  }
}

function removeBackgroundImage() {
  var removeBackground = document.querySelectorAll('.background-image');
  for (var i = 0; i < removeBackground.length; i++) {
    removeBackground[i].classList.add('hidden');
  }
}

function addHatGarment(event) {
  hatGarment = document.querySelector(`#${event.target.dataset.id}`);
  if (event.target.classList.contains('selected-button')) {
    hatGarment.classList.add('hidden');
    event.target.classList.replace('selected-button', 'unselected-button');
  } else if (event.target.innerText === `${event.target.innerText}`) {
    removeHatGarment();
    hatGarment.classList.remove('hidden');
    outfit.addGarment(`${event.target.dataset.id}`);
  }
}

function addClothesGarment(event) {
  clothesGarment = document.querySelector(`#${event.target.dataset.id}`);
  if (event.target.classList.contains('selected-button')) {
    clothesGarment.classList.add('hidden');
    event.target.classList.replace('selected-button', 'unselected-button');
  } else if (event.target.innerText === `${event.target.innerText}`) {
    removeClothesGarment();
    clothesGarment.classList.remove('hidden');
    outfit.addGarment(`${event.target.dataset.id}`);
  }
}

function addAccessoriesGarment(event) {
  accessoriesGarment = document.querySelector(`#${event.target.dataset.id}`);
  if (event.target.classList.contains('selected-button')) {
    accessoriesGarment.classList.add('hidden');
    event.target.classList.replace('selected-button', 'unselected-button');
  } else if (event.target.innerText === `${event.target.innerText}`) {
    removeAccessoriesGarment();
    accessoriesGarment.classList.remove('hidden');
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

// Function to remove all garments



//
