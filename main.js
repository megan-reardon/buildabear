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
// var hatGarment;
// var garmentIndexNumber;

// variables for removing element from array
function updateArray(event) {
  garmentIndexNumber = outfit.garments.indexOf(`${event.target.dataset.id}`);
  var previousGarment = outfit.garments.includes('sun-hat');
  console.log(previousGarment);
  // console.log(garmentIndexNumber);
  if(event.target.classList.contains('hat')) {
}
};


// function updateArray() {
// var hatId = 'sun-hat';
//
// for(var i=0; i<outfit.garments.length; i++) {
//   if(outfit.garments.length[i].id == hatId) {
//     data.splice(i, 1);
//     break;
//   }
// }
// }


// function retrieveHatArray() {
//   outfit.garments.includes('top-hat');
// }
//
// function previousHat() {
//   outfit.garments.findIndex(retrieveHatArray);
// };


saveButton.addEventListener('click', saveOutfit);
hatSection.addEventListener('click', hatConditionals);
clothesSection.addEventListener('click', clothesConditionals);
accessoriesSection.addEventListener('click', accessoriesConditionals);
backgroundsSection.addEventListener('click', backgroundsConditionals);
garmentSection.addEventListener('click', indicateActivateButton);

window.onload = console.log(outfit);

function saveOutfit() {
  var clearForm = document.querySelector("form");
  event.preventDefault();
  closet.insertAdjacentHTML('afterbegin', `
    <div class="saved-outfit-card">
      <p>${outfitName.value}</p>
      <img class="close" src="./assets/close.svg" alt="close-icon">
    </div>
  `);
  clearForm.reset();
}

// Function to highlight button when clicked
function indicateActivateButton(event) {
  if (event.target.classList.contains('button')) {
    event.target.classList.toggle('selected-button');
  }
}

function hatConditionals(event) {
  if (event.target.classList.contains('hats-btn')) {
    addHatGarment(event);
    // disableUnselectedButtonsHats(event);
    // updateArray(event);
  }
}

function clothesConditionals(event) {
  if (event.target.classList.contains('clothes-btn')) {
    addClothesGarment(event);
    disableUnselectedButtonsClothes(event);
    // updateArray(event);
  }
}

function accessoriesConditionals(event) {
  if (event.target.classList.contains('accessories-btn')) {
    addAccessoriesGarment(event);
    disableUnselectedButtonsAccessories();
    console.log(outfit.garments);
    // updateArray(event);
  }
}

function backgroundsConditionals(event) {
  if (event.target.classList.contains('backgrounds-btn')) {
    addBackgroundImage(event);
    disableUnselectedButtonsBackgrounds();
  }
}

// Function to change button color when garment is selected

function disableUnselectedButtonsHats(event) {
  var hats = document.querySelectorAll('.hats-btn');
  for (var i = 0; i < hats.length; i++) {
    hats[i].classList.remove('selected-button');
  };

  event.target.classList.replace('selected-button', 'unselected-button');
}

function disableUnselectedButtonsClothes() {
  var clothes = document.querySelectorAll('.clothes-btn');
  for (var i = 0; i < clothes.length; i++) {
    clothes[i].classList.remove('selected-button');
  };

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
  var hats = ['top-hat', 'sun-hat', 'hair-bow', 'crown', 'helmet']
  removeOutfitVisuals('.hat-image')
  outfit.removeGarment(hats)
}

function removeOutfitVisuals(garmentClass) {
  var itemsToRemove = document.querySelectorAll(garmentClass)
  for (var i = 0; i < itemsToRemove.length; i++){
    itemsToRemove[i].classList.add('hidden');
  }
}

function removeClothesGarment() {
  var clothes = ['dress', 'vest'];
  removeOutfitVisuals('.clothes-image');
  outfit.removeGarment(clothes);
}

function removeAccessoriesGarment() {
  var accessories = ['necklace', 'bowtie', 'watch', 'sunnies'];
  removeOutfitVisuals('.accessories-image');
  outfit.removeGarment(accessories);
  }

function removeBackgroundImage() {
  var removeBackground = document.querySelectorAll('.background-image');
  for (var i = 0; i < removeBackground.length; i++) {
    removeBackground[i].classList.add('hidden');
  }
}

function addHatGarment(event) {
  hatGarment = document.querySelector(`#${event.target.dataset.id}`);
  if(event.target.classList.contains('selected-button')) {
    hatGarment.classList.add('hidden');
    event.target.classList.add('unselected-button');
    event.target.classList.remove('selected-button');
    } else if (event.target.innerText === `${event.target.innerText}`) {
    removeHatGarment();
    hatGarment.classList.remove('hidden');
    event.target.classList.replace('unselected-button', 'selected-button');
    disableUnselectedButtonsHats(event);
    outfit.addGarment(`${event.target.dataset.id}`);
  }
  console.log(outfit);
}

function addClothesGarment(event) {
  clothesGarment = document.querySelector(`#${event.target.dataset.id}`);
    if(event.target.classList.contains('selected-button')) {
      clothesGarment.classList.add('hidden');
      event.target.classList.replace('selected-button', 'unselected-button');
    } else if (event.target.innerText === `${event.target.innerText}`) {
    removeClothesGarment();
    clothesGarment.classList.remove('hidden');
    outfit.addGarment(`${event.target.dataset.id}`);
  }
  console.log(outfit);
}

function addAccessoriesGarment(event) {
  accessoriesGarment = document.querySelector(`#${event.target.dataset.id}`);
    if(event.target.classList.contains('selected-button')) {
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
    if(event.target.classList.contains('selected-button')) {
      backgroundImage.classList.add('hidden');
      event.target.classList.replace('selected-button', 'unselected-button');
    } else if (event.target.innerText === `${event.target.innerText}`) {
    removeBackgroundImage();
    backgroundImage.classList.remove('hidden');
  }
}
