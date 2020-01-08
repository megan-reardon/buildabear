var closet = document.querySelector('.saved-outfit');
var outfitName = document.querySelector('input');
var saveButton = document.querySelector('#save-button');
var garmentSection = document.querySelector('.garment-option-container');
var allGarments = [];
var backgroundsSection = document.querySelector('.backgrounds');
var id = Date.now(id);
var outfit = new Outfit(id);
var hats = ['top-hat', 'sun-hat', 'hair-bow', 'crown', 'helmet'];
var clothes = ['dress', 'vest'];
var accessories = ['necklace', 'bowtie', 'watch', 'sunnies'];
saveButton.addEventListener('click', saveOutfit);
garmentSection.addEventListener('click', indicateButtonsAndDress);
outfitName.addEventListener('keyup', validateInput);
closet.addEventListener('click', savedOutfitHandler);


window.onload = function() {
  var savedGarments = window.localStorage.getItem("savedOutfits");
  if(localStorage.length > 0) {
  allGarments = allGarments.concat(JSON.parse(savedGarments));
} else {
  allGarments = [];
}
refreshSavedCards();
}

function savedOutfitHandler(event) {
  removeSavedOutfitCard(event);
  reDressBear(event);
}


function refreshSavedCards() {
  for(var i = 0; i < allGarments.length; i++) {
  closet.insertAdjacentHTML('afterbegin', `
    <div class="saved-outfit-card">
      <p>${allGarments[i].title}</p>
      <img class="close ${allGarments[i].title}" src="./assets/close.svg" alt="close-icon">
    </div>
  `);
  }
}

// refreshSavedCards(allGarments[0].title);

function indicateButtonsAndDress() {
  runOutfitConditional(event.target.classList[1]);
  indicateActivateButton(event);
}

function runOutfitConditional(classOfButton) {
  if (event.target.classList.contains(classOfButton)) {
    addGarments(event);
    disableUnselectedButtons(`.${classOfButton}`);
    updateObjectGarments(classOfButton);
    outfit.addGarment(`${event.target.dataset.id}`);
  }
}

function removeGarmentFromBear(garmentItem) {
  let garment = document.querySelectorAll(garmentItem);
  for (var i = 0; i < garment.length; i++) {
    garment[i].classList.add('hidden');
  }
}

function updateObjectGarments() {
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

function addGarments(event) {
  // debugger
  let garment = document.querySelector(`#${event.target.dataset.id}`);
  var garmentsToDelete = `.${garment.classList[0]}`;
  if (event.target.classList.contains('selected-button') && event.target.classList.contains('unselected-button')) {
    garment.classList.remove('hidden');
  } else if (event.target.classList.contains('selected-button')) {
    garment.classList.add('hidden');
    // disableUnselectedButtons();
    event.target.classList.replace('selected-button','unselected-button');
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
  outfit.title = outfitName.value;
  allGarments.push(outfit);
  clearOutfits();
  disableUnselectedButtons('.button');
  form.reset();
  window.localStorage.setItem("savedOutfits", JSON.stringify(allGarments));
  outfit = new Outfit(Date.now());
}

// uploadGarments();

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

function indicateActivateButton(event) {
  if (event.target.classList.contains('selected-button')) {
    event.target.classList.remove('selected-button')
  } else if (event.target.classList.contains('button')) {
    event.target.classList.toggle('selected-button');
  }
}


function removeSavedOutfitCard(event) {
  for(var i = 0; i < allGarments.length; i++) {
    // console.log(allGarments[i].title)
    if(event.target.classList.contains(`${allGarments[i].title}`)) {
      allGarments.splice(i, 1);
      window.localStorage.setItem("savedOutfits", JSON.stringify(allGarments));
    }
  }
  if (event.target.classList.contains('close')) {
    event.target.closest('.saved-outfit-card').remove();
  }
}

function reDressBear(event) {
  clearOutfits();
  var garmentImages = document.querySelectorAll('.garment-image');
  var foundGarment = allGarments.find(garment => garment.title === event.target.innerText)
    for ( var i = 0; i < foundGarment.garments.length; i++) {
      // console.log(foundGarment.garments[i]);
      // console.log(`#${foundGarment.garments[i]}`);
      for(var j = 0; j < garmentImages.length; j++) {
        if (foundGarment.garments[i] === garmentImages[j].id) {
          garmentImages[j].classList.remove('hidden');
          console.log('sanity check');
        }
      }

    }
  // if(foundGarment )
  console.log(foundGarment.garments);
  // console.log(foundGarment.background);
  // document.getElementById(foundGarment.background).click()
  // for (var i = 0; i < allGarments.length; i++) {
  //   console.log(allGarments[i]);
  }

// function reDressBear(event) {
//   for(var i = 0; i < allGarments.length; i++) {
//   if(event.target.innerText === `${allGarments[i].title}`) {
//     document.getElementById(allGarments[i].title).click();
//     console.log(allGarments[i].title);
//   }
//     // for(var j = 0; j < allGarments.length; j++) {
//     //
//     //
//     // console.log((allGarments[i].title));
//   }
// }


// function reDressBear(event) {
//   console.log(outfit);
//   for(var i = 0; i < allGarments.length; i++) {
//     if(event.target.innerText === `${allGarments[i].title}`) {
//       var indexOfGarment = allGarments.indexOf(allGarments[i]);
//       var savedBearOutfit = window.localStorage.getItem("savedOutfits");
//       var parsedBearOutfit = JSON.parse(savedBearOutfit);
//       var outfitTitle = parsedBearOutfit[indexOfGarment].title;
//       var outfitGarments = parsedBearOutfit[indexOfGarment];
//       }
//     if(outfitTitle === `${allGarments[i].title}`) {
//     var outfit = new Outfit(outfitGarments.id, outfitGarments.title, outfitGarments.garments, outfitGarments.background);
//       console.log(outfit);
//     }
//   }
//   var backgroundImages = document.getElementById(`${outfit.title}`)
//   var garmentImages = document.querySelectorAll(`${outfit.garments}`);
//
//     console.log(garmentImages);
//
//   var garmentImages = document.querySelectorAll('.garment-image');
//     for(var k = 0; k < garmentImages.length; k++) {
//       console.log(garmentImages[k]);
//       if(garmentImages[k].contains(`#${outfit.title}`)) {
//         garment.classList.remove('hidden');
//       } console.log(`#${outfit.title}`);
//     for(var j = 0; j < outfit.garments.length; j++) {
//
//       if(outfit.garments[j] === 'helmet') {
//         garment.classList.remove('hidden');
//       }
//     }
// }
// }



// outfit = new Outfit({id: outfitGarments.id, title: outfitGarments.title, garment: outfitGarments.garments, background: outfitGarments.background})


// function reDressBear(event) {
//   for(var i = 0; i < allGarments.length; i++) {
//     if(event.target.innerText === `${allGarments[i].title}`) {
//       for(var j = 0; j < allGarments[i].garments.length; j++) {
//         console.log(allGarments[i].garments[0]);
//       }
//
//   }
// }
// }
