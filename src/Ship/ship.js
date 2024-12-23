function Ship() {
  let length;
  let nTimesHit = 0;
  let sunk = false;

  function hit() {
    nTimesHit += 1;
  }

  function isSunk() {
    if (nTimesHit > length) {
      sunk = true;
    }
  }

  return { length, nTimesHit, sunk, hit, isSunk };
}

export default Ship;
