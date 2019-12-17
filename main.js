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
  console.log(event);
  var hatGarment = document.querySelector(`#${event.target.dataset.id}`);
  if (event.target.innerText === `${event.target.innerText}`) {
    hatGarment.classList.toggle('hidden');
    outfit.addGarment(`${event.target.dataset.id}`);
  }
}

function addClothesGarment(event) {
  console.log(event);
  var clothesGarment = document.querySelector(`#${event.target.dataset.id}`);
  if (event.target.innerText === `${event.target.innerText}`) {
    clothesGarment.classList.toggle('hidden');
    outfit.addGarment(`${event.target.dataset.id}`);
  }
}

function addAccessoriesGarment(event) {
  console.log(event);
  var accessoriesGarment = document.querySelector(`#${event.target.dataset.id}`);
  if (event.target.innerText === `${event.target.innerText}`) {
    accessoriesGarment.classList.toggle('hidden');
    outfit.addGarment(`${event.target.dataset.id}`);
  }
}

function addBackgroundImage(event) {
  console.log(event);
  var backgroundImage = document.querySelector(`#${event.target.dataset.id}`);
  if (event.target.innerText === `${event.target.innerText}`) {
    backgroundImage.classList.toggle('hidden');
  }
}

//
