class Outfit {
  constructor(id, title='', garments=[], background='') {
    this.id = id;
    this.title = title;
    this.garments = garments;
    this.background = background;
  }

  addGarment(garmentPlaceHolder) {
    if (garmentPlaceHolder === 'park' || garmentPlaceHolder === 'beach' ||
      garmentPlaceHolder === 'space' || garmentPlaceHolder === 'hearts') {
      this.background = garmentPlaceHolder;
    } else {
      this.garments.push(garmentPlaceHolder);
    }
  }

  removeGarment(garmentsToRemove) {
    for (var i = 0; i < garmentsToRemove.length; i++) {
      var garmentToRemove = garmentsToRemove[i];
      var indexToRemove = this.garments.indexOf(garmentToRemove);
      if (indexToRemove !== -1) {
        this.garments.splice(indexToRemove, 1);
      }
    }
  }
}
