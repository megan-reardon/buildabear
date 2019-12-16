var closet = document.querySelector('.saved-outfit');
var outfitName = document.querySelector('input');
var saveButton = document.querySelector('#save-button');
var outfits = [];
var garmentOptions = document.querySelector('.garment-option-container');
// var clothes = document.querySelector('.clothes');
// var accessories = document.querySelector('.accessories');
// var backgrounds = document.querySelector('.backgrounds');

saveButton.addEventListener('click', saveOutfit);
garmentOptions.addEventListener('click', addGarment);
// clothes.addEventListener('click', addClothes);
// accessories.addEventListener('click', addAccessories);
// backgrounds.addEventListener('click', addBackgrounds);

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

function addGarment(event) {
  if(event.target.classList.contains('button')) {
    event.target.classList.toggle('button-active');
}
}
  // if(event.target.innerText === 'Top hat') {
  //   event.target.classList.toggle('button-active');
  // } else if(event.target.innerText === 'Sun hat') {
  //   event.target.classList.toggle('button-active');
  // } else if(event.target.innerText === 'Bow') {
  //   event.target.classList.toggle('button-active');
  // } else if(event.target.innerText === 'Crown') {
  // event.target.classList.toggle('button-active');
  // }
// }
//
// function addClothes(event) {
//   if(event.target.innerText === 'T-shirt') {
//     event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Dress') {
//     event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Tuxedo') {
//     event.target.classList.toggle('button-active');
//   }
// }
//
// function addAccessories(event) {
//   if(event.target.innerText === 'Necklace') {
//     event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Bowtie') {
//     event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Watch') {
//     event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Monocle') {
//   event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Earrings') {
//   event.target.classList.toggle('button-active');
//   }
// }
//
// function addBackgrounds(event) {
//   if(event.target.innerText === 'Blue') {
//     event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Park') {
//     event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Beach') {
//     event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Space') {
//   event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Yellow') {
//   event.target.classList.toggle('button-active');
//   } else if(event.target.innerText === 'Hearts') {
//   event.target.classList.toggle('button-active');
//   }
// }

//
