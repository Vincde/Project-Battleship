function ship(shipLength) {
  let nTimesHit = 0;
  let length = shipLength;
  let sunk = false;

  function hit() {
    nTimesHit += 1;
  }

  function isSunk() {
    if (nTimesHit >= length) {
      sunk = true;
    }
  }

  return { hit, isSunk };
}

export default ship;
