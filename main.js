var closet = document.querySelector('.saved-outfit');
var outfitName = document.querySelector('input');
var saveButton = document.querySelector('#save-button');
var outfits = [];
var garmentOptions = document.querySelector('.garment-option-container');
var hatSection = document.querySelector('.hats');
var clothesSection = document.querySelector('.clothes');
var accessoriesSection = document.querySelector('.accessories');
var backgroundsSection = document.querySelector('.backgrounds');

saveButton.addEventListener('click', saveOutfit);
garmentOptions.addEventListener('click', indicateActivateButton);
hatSection.addEventListener('click', hatConditionals);
clothesSection.addEventListener('click', clothesConditionals);
accessoriesSection.addEventListener('click', accessoriesConditionals);
backgroundsSection.addEventListener('click', backgroundsConditionals);

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
  addHairBow(event);
  addCrown(event);
}

function clothesConditionals() {
  addDress(event);
}

function accessoriesConditionals() {
  addNecklace(event);
  addBowTie(event);
  addWatch(event);
}

function backgroundsConditionals() {
  addPark(event);
  addBeach(event);
  addSpace(event);
  addHearts(event);
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

function addHairBow(event) {
  var bow = document.querySelector('#hair-bow');
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

function addDress(event) {
  var dress = document.querySelector('#dress');
  if (event.target.innerText === 'Dress') {
    dress.classList.toggle('hidden');
  }
}

function addNecklace(event) {
  var necklace = document.querySelector('#necklace');
  if (event.target.innerText === 'Necklace') {
    necklace.classList.toggle('hidden');
  }
}

function addBowTie(event) {
  var bowTie = document.querySelector('#bowtie');
  if (event.target.innerText === 'Bowtie') {
    bowTie.classList.toggle('hidden');
  }
}

function addWatch(event) {
  var watch = document.querySelector('#watch');
  if (event.target.innerText === 'Watch') {
    watch.classList.toggle('hidden');
  }
}

function addPark(event) {
  var park = document.querySelector('#park');
  if (event.target.innerText === 'Park') {
    park.classList.toggle('hidden');
  }
}

function addBeach(event) {
  var beach = document.querySelector('#beach');
  if (event.target.innerText === 'Beach') {
    beach.classList.toggle('hidden');
  }
}

function addSpace(event) {
  var space = document.querySelector('#space');
  if (event.target.innerText === 'Space') {
    space.classList.toggle('hidden');
  }
}

function addHearts(event) {
  var hearts = document.querySelector('#hearts');
  if (event.target.innerText === 'Hearts') {
    hearts.classList.toggle('hidden');
  }
}

//
