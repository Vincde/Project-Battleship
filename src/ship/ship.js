function Ship(length) {
  let nTimesHit = 0;

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

export default Ship;
