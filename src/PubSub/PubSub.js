function PubSub() {
  const events = {};

  // Subscribe to an event
  function subscribe(event, callback) {
    if (!events[event]) {
      events[event] = [];
    }
    events[event].push(callback);
  }

  function unsubscribe(event, callback) {
    if (!events[event]) return;
    events[event] = events[event].filter((fn) => fn !== callback);
  }

  function publish(event, data) {
    if (!events[event]) return;
    events[event].forEach((callback) => callback(data));
  }

  return { subscribe, unsubscribe, publish };
}

const pubSub = PubSub();

export default pubSub;
