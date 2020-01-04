var closet = document.querySelector('.saved-outfit');
var outfitName = document.querySelector('input');
var saveButton = document.querySelector('#save-button');
var outfits = [];
var garmentSection = document.querySelector('.garment-option-container');
var backgroundsSection = document.querySelector('.backgrounds');
var id = Date.now(id);
var outfit = new Outfit(id);
var allGarments = [];
var hats = ['top-hat', 'sun-hat', 'hair-bow', 'crown', 'helmet'];
var clothes = ['dress', 'vest'];
var accessories = ['necklace', 'bowtie', 'watch', 'sunnies'];

saveButton.addEventListener('click', saveOutfit);
garmentSection.addEventListener('click', indicateButtonsAndDress);
outfitName.addEventListener('keyup', validateInput); //Adds event listener to the input field
closet.addEventListener('click', removeSavedOutfitCard);

window.onload = console.log(outfit);


function indicateButtonsAndDress() {
  runOutfitConditional(event.target.classList[1]);
  indicateActivateButton(event);
}

function runOutfitConditional(classOfButton) {
  if (event.target.classList.contains(classOfButton)) {
    selectGarments(event); // adds to garments array
    addGarments(event); // displays images on the bear
    disableUnselectedButtons(`.${classOfButton}`);
    // console.log(classOfButton);
    updateObjectGarments();
    outfit.addGarment(`${event.target.dataset.id}`);
    // console.log(`${event.target.dataset.id}`)
  }
}

function removeGarmentFromBear(garmentItem) {
  var garmentToRemoveFromObject;
  let garment = document.querySelectorAll(garmentItem);
  for (var i = 0; i < garment.length; i++) {
    garment[i].classList.add('hidden');
  }
}

function updateObjectGarments() {
  if (event.target.classList.contains('hats-btn')) {
    garmentToRemoveFromObject = hats;
    outfit.removeGarment(garmentToRemoveFromObject);
    // console.log(event.target.classList);
    console.log(garmentToRemoveFromObject);
  } else if (event.target.classList.contains('clothes-btn')) {
    garmentToRemoveFromObject = clothes;
    outfit.removeGarment(garmentToRemoveFromObject);
    // console.log(event.target.classList);
    console.log(garmentToRemoveFromObject);
  } else if (event.target.classList.contains('accessories-btn')) {
    garmentToRemoveFromObject = accessories;
    outfit.removeGarment(garmentToRemoveFromObject);
    // console.log(event.target.classList);
    console.log(garmentToRemoveFromObject);
  }
}

function addGarments(event) {
  let garment = document.querySelector(`#${event.target.dataset.id}`);
  var garmentsToDelete = `.${garment.classList[0]}`;
  if (event.target.classList.contains('selected-button')) {
    event.target.classList.replace('selected-button', 'unselected-button');
  } else if (event.target.innerText === event.target.innerText) {
    removeGarmentFromBear(garmentsToDelete);
    garment.classList.remove('hidden');
  }
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
  for (var i = 0; i < hatButtons.length; i++) {
    if (event.target.parentElement.className === 'hats-btn')
    allGarments[0] = event.target.id;
  }
}

function saveOutfit() {
  var form = document.querySelector('form');
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
  form.reset();
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

//This function removes a saved outfit card
function removeSavedOutfitCard(event) {
  if (event.target.classList.contains('close')) {
    event.target.closest('.saved-outfit-card').remove();
  }
}
