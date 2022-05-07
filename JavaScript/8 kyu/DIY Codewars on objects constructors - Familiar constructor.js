//codewars by my partner Big Al

// a pack yak can hold 28 items given the number of items the pack yak is currently holding display the number of available item slots.

class MakeFamiliar {
  constructor(carryLimit, occupiedSpace, color, age, catchPhrase, species) {
    this.carryLimit = carryLimit;
    this.occupiedSpace = occupiedSpace;
    this.color = color;
    this.age = age;
    this.catchPhrase = catchPhrase;
    this.species = species;
  }
  freeSlots() {
    return this.carryLimit - this.occupiedSpace;
  }

  announceFamiliar() {
    return `"${this.catchPhrase}", said the ${this.age} year old ${this.color} ${this.species}.`;
  }
}

let pakYak = new MakeFamiliar(28, 7, "purple", 100000, "Wowie", "Yak");

console.log(pakYak.carryLimit);

console.log(pakYak.occupiedSpace);

console.log(pakYak.freeSlots());

console.log(pakYak.announceFamiliar());
