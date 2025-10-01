function ship(shipLength) {
  let nTimesHit = 0;
  let length = shipLength;

  function hit() {
    nTimesHit += 1;
  }

  function isSunk() {
    if (nTimesHit >= length) {
      return true;
    }
    return false;
  }

  return { hit, isSunk };
}

export default ship;
