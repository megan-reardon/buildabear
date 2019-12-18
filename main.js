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

window.onload = console.log(outfit);

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
    event.target.classList.toggle('selected-button');
  }
}

function hatConditionals() {

  addHatGarment(event);
  disableUnselectedButtons(event);

}

function clothesConditionals() {
  addClothesGarment(event);

}

function accessoriesConditionals() {
  addAccessoriesGarment(event);
  console.log(outfit.garments);
}

function backgroundsConditionals() {
  addBackgroundImage(event);
}

// Function to change button color when garment is selected
var hats = document.querySelectorAll('.hats-btn');
function disableUnselectedButtons() {
  for(var i = 0; i<hats.length; i++) {
    hats[i].classList.remove('selected-button');
  }
  event.target.classList.replace('selected-button', 'unselected-button');
}


function addHatGarment(event) {
  hatGarment = document.querySelector(`#${event.target.dataset.id}`);
  removeHatGarment();
  if (event.target.innerText === `${event.target.innerText}`) {
    hatGarment.classList.toggle('hidden');
    outfit.addGarment(`${event.target.dataset.id}`);
  }
  console.log(outfit);
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

function addClothesGarment(event) {
  console.log(event);
  var clothesGarment = document.querySelector(`#${event.target.dataset.id}`);
  removeClothesGarment();
  if (event.target.innerText === `${event.target.innerText}`) {
    clothesGarment.classList.toggle('hidden');
    outfit.addGarment(`${event.target.dataset.id}`);
  }
}

function addAccessoriesGarment(event) {
  console.log(event);
  var accessoriesGarment = document.querySelector(`#${event.target.dataset.id}`);
  removeAccessoriesGarment();
  if (event.target.innerText === `${event.target.innerText}`) {
    accessoriesGarment.classList.toggle('hidden');
    outfit.addGarment(`${event.target.dataset.id}`);
  }
}

function addBackgroundImage(event) {
  console.log(event);
  var backgroundImage = document.querySelector(`#${event.target.dataset.id}`);
  removeBackgroundImage();
  if (event.target.innerText === `${event.target.innerText}`) {
    backgroundImage.classList.toggle('hidden');
  }
}

// Function to remove all garments



//
