import "./style.css";

class Ship {
  constructor(length, numberOfTimesHit, isSunk) {
    this.length = length;
    this.numberOfTimesHit = numberOfTimesHit;
    this.isSunk = isSunk;
  }

  hit() {
    this.numberOfTimesHit += 1;
  }

  isSunk() {
    if (this.numberOfTimesHit >= this.length) {
      return true;
    }
    return false;
  }
}
