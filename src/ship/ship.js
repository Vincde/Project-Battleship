function ship(shipLength) {
  let nTimesHit = 0;
  let length = shipLength;

  function hit() {
    nTimesHit += 1;
  }

  function getSunk() {
    if (nTimesHit >= length) {
      return true;
    }
    return false;
  }

  function getLength() {
    return length;
  }

  return { hit, getSunk, getLength };
}

export default ship;
