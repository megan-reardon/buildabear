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

// Function to disable buttons that aren't clicked



function hatConditionals() {
  addTopHat(event);
  addSunHat(event);
  addHairBow(event);
  addCrown(event);
  addHelmet(event);
  console.log(outfit.garments);
  disableUnselectedButtons(event);
}

function clothesConditionals() {
  addDress(event);
  addVest(event);
  console.log(outfit.garments);
}

function accessoriesConditionals() {
  addNecklace(event);
  addBowTie(event);
  addWatch(event);
  addSunnies(event);
  console.log(outfit.garments);
}

function backgroundsConditionals() {
  addPark(event);
  addBeach(event);
  addSpace(event);
  addHearts(event);
}

var hats = document.querySelectorAll('.hats-btn');

function disableUnselectedButtons() {
  // debugger
  for(var i = 0; i<hats.length; i++) {
    hats[i].classList.remove('selected-button');
  }
  event.target.classList.replace('selected-button', 'unselected-button');
  console.log('hi');
}

function addTopHat(event) {
  var topHat = document.querySelector('#top-hat');
  if (event.target.innerText === 'Top hat') {
    topHat.classList.toggle('hidden');
    outfit.addGarment(topHat);
  }
}

function addSunHat(event) {
  var sunHat = document.querySelector('#sun-hat');
  if (event.target.innerText === 'Sun hat') {
    sunHat.classList.toggle('hidden');
    outfit.addGarment(sunHat);
  }
}

function addHairBow(event) {
  var bow = document.querySelector('#hair-bow');
  if (event.target.innerText === 'Bow') {
    bow.classList.toggle('hidden');
    outfit.addGarment(bow);
  }
}

function addCrown(event) {
  var crown = document.querySelector('#crown');
  if (event.target.innerText === 'Crown') {
    crown.classList.toggle('hidden');
    outfit.addGarment(crown);
  }
}

function addHelmet(event) {
  var helmet = document.querySelector('#helmet');
  if (event.target.innerText === 'Helmet') {
    helmet.classList.toggle('hidden');
    outfit.addGarment(helmet);
  }
}

function addDress(event) {
  var dress = document.querySelector('#dress');
  if (event.target.innerText === 'Dress') {
    dress.classList.toggle('hidden');
    outfit.addGarment(dress);
  }
 }


function addVest(event) {
  var vest = document.querySelector('#vest');
  if (event.target.innerText === 'Vest') {
    vest.classList.toggle('hidden');
    outfit.addGarment(vest);
  }
}

function addNecklace(event) {
  var necklace = document.querySelector('#necklace');
  if (event.target.innerText === 'Necklace') {
    necklace.classList.toggle('hidden');
    outfit.addGarment(necklace);
  }
}

function addSunnies(event) {
  var sunnies = document.querySelector('#sunnies');
  if (event.target.innerText === 'Sunnies') {
    sunnies.classList.toggle('hidden');
    outfit.addGarment(sunnies);
  }
}

function addBowTie(event) {
  var bowTie = document.querySelector('#bowtie');
  if (event.target.innerText === 'Bowtie') {
    bowTie.classList.toggle('hidden');
    outfit.addGarment(bowTie);
  }
}

function addWatch(event) {
  var watch = document.querySelector('#watch');
  if (event.target.innerText === 'Watch') {
    watch.classList.toggle('hidden');
    outfit.addGarment(watch);
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
