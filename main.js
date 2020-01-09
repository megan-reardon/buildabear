var closet = document.querySelector('.saved-outfit');
var outfitName = document.querySelector('input');
var saveButton = document.querySelector('#save-button');
var garmentSection = document.querySelector('.garment-option-container');
var allGarments = [];
var id = Date.now(id);
var outfit = new Outfit(id);

saveButton.addEventListener('click', createOutfitCard);
garmentSection.addEventListener('click', indicateButtonsAndDress);
outfitName.addEventListener('keyup', validateInput);
closet.addEventListener('click', savedOutfitHandler);

// function that is invoked on page load to bring outfit cards from LS
window.onload = function () {
    var savedGarments = window.localStorage.getItem('savedOutfits');
    if (localStorage.length > 0) {
      allGarments = allGarments.concat(JSON.parse(savedGarments));
    } else {
      allGarments = [];
    }

    refreshSavedCards();
  };

// handler function for closet section (where the saved cards pop up)
function savedOutfitHandler(event) {
  removeSavedOutfitCard(event);
  reDressBear(event);
  reDisplaySelectedButtons(event);
  rePopulateInput(event);
}

//function that displays cards in the closet area on window load
function refreshSavedCards() {
  for (var i = 0; i < allGarments.length; i++) {
    closet.insertAdjacentHTML('afterbegin', `
    <div class="saved-outfit-card">
      <p>${allGarments[i].title}</p>
      <img class="close ${allGarments[i].title}" src="./assets/close.svg" alt="close-icon">
    </div>
  `);
  }
}

//handler function for all the garment buttons
function indicateButtonsAndDress() {
  runOutfitConditional(event.target.classList[1]);
  indicateActivateButton(event);
}

//function that handles what each button does and updates the outfit object it
//also triggers a function that changes button styling from selected to unselected and vise versa.
//it also fires a function that adds or removes images from hte bear
function runOutfitConditional(classOfButton) {
  if (event.target.classList.contains(classOfButton)) {
    addGarments(event);
    disableUnselectedButtons(`.${classOfButton}`);
    updateObjectGarments(classOfButton);
    outfit.addGarment(`${event.target.dataset.id}`);
  }
}

//totally undresses the bear.
function removeGarmentFromBear(garmentItem) {
  let garment = document.querySelectorAll(garmentItem);
  for (var i = 0; i < garment.length; i++) {
    garment[i].classList.add('hidden');
  }
}

// this function updates the outfit object based on the garment button
function updateObjectGarments() {
  var hats = ['top-hat', 'sun-hat', 'hair-bow', 'crown', 'helmet'];
  var clothes = ['dress', 'vest'];
  var accessories = ['necklace', 'bowtie', 'watch', 'sunnies'];
  var garmentToRemoveFromObject;
  if (event.target.classList.contains('hats-btn')) {
    garmentToRemoveFromObject = hats;
    outfit.removeGarment(garmentToRemoveFromObject);
  } else if (event.target.classList.contains('clothes-btn')) {
    garmentToRemoveFromObject = clothes;
    outfit.removeGarment(garmentToRemoveFromObject);
  } else if (event.target.classList.contains('accessories-btn')) {
    garmentToRemoveFromObject = accessories;
    outfit.removeGarment(garmentToRemoveFromObject);
  }
}

  //adds or removes garments from the bear
function addGarments(event) {
  let garment = document.querySelector(`#${event.target.dataset.id}`);
  var garmentsToDelete = `.${garment.classList[0]}`;
  if (event.target.classList.contains('selected-button') &&
    event.target.classList.contains('unselected-button')) {
    garment.classList.remove('hidden');
  } else if (event.target.classList.contains('selected-button')) {
    garment.classList.add('hidden');
    event.target.classList.replace('selected-button', 'unselected-button');
    event.target.classList.remove('selected-button');
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

// this function runs when the save outfit button is pressed it creates an
//outfit card on the right side and also pushes allGarments array into Local Storage
function createOutfitCard() {
  var innerText = outfitName.value.replace(/\s/g, "").toUpperCase();
  var form = document.querySelector('form');
  event.preventDefault();
  closet.insertAdjacentHTML('afterbegin', `
    <div class="saved-outfit-card">
      <p>${innerText}</p>
      <img class="close" src="./assets/close.svg" alt="close-icon">
    </div>
  `);
  saveOutfit(form, innerText);
  window.localStorage.setItem("savedOutfits", JSON.stringify(allGarments));
  outfit = new Outfit(Date.now());
  location.reload();
}

// this function runs when save outfit button is pressed, it disables saved button,
//pushes a new outfit into allGarments array, clears the bear of clothing, puts
//buttons into unselected state and resets the form.
function saveOutfit(form, innerText) {
  saveButton.disabled = true;
  outfit.title = innerText;
  allGarments.push(outfit);
  clearOutfits();
  disableUnselectedButtons('.button');
  form.reset();
}

//this functions takes all the images off the bear
function clearOutfits() {
  let garments = document.querySelectorAll('.garment-image');
  for (var i = 0; i < garments.length; i++) {
    garments[i].classList.add('hidden');
  }
}

//this function puts a class of .selected-button on all of the garment buttons
//to show that they are in a non active state
function disableUnselectedButtons(button) {
  var disabledButton = document.querySelectorAll(button);
  for (var i = 0; i < disabledButton.length; i++) {
    disabledButton[i].classList.remove('selected-button');
  }
}

//this function toggle class of .selected button on garment buttons to indicate
//they status. This fuctions is dedicated to toggling only
function indicateActivateButton(event) {
  if (event.target.classList.contains('selected-button')) {
    event.target.classList.remove('selected-button');
  } else if (event.target.classList.contains('button')) {
    event.target.classList.toggle('selected-button');
  }
}

//this function updates the array of allGarments when outfitcard is removed by user
//it also puts the AllGarments array into local storage with updated information about
//the removed object from allGarments array. it also sets all garment buttons to
//unselected state.
function removeSavedOutfitCard(event) {
  for (var i = 0; i < allGarments.length; i++) {
    if (event.target.classList.contains(`${allGarments[i].title}`)) {
      allGarments.splice(i, 1);
      window.localStorage.setItem("savedOutfits", JSON.stringify(allGarments));
    }
  }

  if (event.target.classList.contains('close')) {
    event.target.closest('.saved-outfit-card').remove();
    disableUnselectedButtons('.button');
  }
}


//this function runs when you click on the outfit card to bring back all the images
// on the bear
function reDressBear(event) {
  clearOutfits();
  var garmentImages = document.querySelectorAll('.garment-image');
  var foundGarment = allGarments.find(garment => garment.title === event.target.innerText);
  for (var i = 0; i < foundGarment.garments.length; i++) {
    for (var j = 0; j < garmentImages.length; j++) {
      if (foundGarment.garments[i] === garmentImages[j].id) {
        garmentImages[j].classList.remove('hidden');
      }

      if (foundGarment.background === garmentImages[j].id) {
        garmentImages[j].classList.remove('hidden');
      }
    }
  }
}

// this function dysplays when outfit card is pressed to display buttons
// that correspond to the outfit.
function reDisplaySelectedButtons(event) {
  disableUnselectedButtons('.button');
  var garmentButtons = document.querySelectorAll('.button');
  var foundButton = allGarments.find(garment => garment.title === event.target.innerText);
  for (var i = 0; i < foundButton.garments.length; i++) {
    for (var j = 0; j < garmentButtons.length; j++) {
      if (foundButton.garments[i] === garmentButtons[j].dataset.id) {
        garmentButtons[j].classList.add('selected-button');
      }

      if (foundButton.background === garmentButtons[j].dataset.id) {
        garmentButtons[j].classList.add('selected-button');
      }
    }
  }
}

// this function runs when outfit card is pressed it puts the name of the outfit
//back into the inputfield
function rePopulateInput(event) {
  outfitName.value = event.target.innerText;
  saveButton.disabled = false;
}
