class Outfit {
  constructor(id, title, background) {
    this.id = id;
    this.title = title;
    this.garments = [];
    this.background = background;
  }

  addGarment(garmentPlaceHolder) {
    if (garmentPlaceHolder === 'park' || garmentPlaceHolder === 'beach' ||
      garmentPlaceHolder === 'space' || garmentPlaceHolder === 'hearts') {
      this.background = garmentPlaceHolder;
      // console.log('background', outfit);
    } else {
      this.garments.push(garmentPlaceHolder);
      // console.log('garment', outfit);
    }
  }

  removeGarment(garmentsToRemove) {
    // console.log(garmentsToRemove);
    for (var i = 0; i < garmentsToRemove.length; i++) {
      var garmentToRemove = garmentsToRemove[i];
      var indexToRemove = this.garments.indexOf(garmentToRemove);
      if (indexToRemove !== -1) {
        this.garments.splice(indexToRemove, 1);
      }
    }
  }
}
