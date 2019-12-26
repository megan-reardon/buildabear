class Outfit {
  constructor(id, title, background) {
    this.id = id;
    this.title = title;
    this.garments = [];
    this.background = background;
  }

  addGarment(garment) {
    this.garments.push(garment);
  }

  removeGarment(garment) {

  }
}
