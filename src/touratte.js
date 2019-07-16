// touratte.js should
// 1. Create CustomEvent with name shout and detail with the random author (from authorsList) and randomly generated text.
// 2. The script will dispatch the event on a random interval (1-5 seconds)

const authorsList = [
  {
    _id: 1,
    name: 'Todd',
  },
  {
    _id: 2,
    name: 'Rob',
  },
  {
    _id: 3,
    name: 'Sevil',
  },
];

let eventId = 0;

const textslist = ['some text', 'other text', 'my very important opinion'];

const getRandomAuthor = () =>
  authorsList[Math.floor(Math.random() * authorsList.length)];

const getRandomText = () =>
  textslist[Math.floor(Math.random() * textslist.length)];

const getRandomInterval = (from, to) => Math.floor(Math.random() * to) + from;

const startEmmiter = eventTarget => () => {
  const renderer = document.getElementById('bottom');

  setTimeout(fireEvent(eventTarget), getRandomInterval(1000, 5000));
};

const fireEvent = subscriber => () => {
  const detail = {
    author: getRandomAuthor(),
    text: getRandomText(),
    id: ++eventId,
  };

  console.log('emit event "shout" with data:', detail);

  const customEvent = new CustomEvent('shout', { detail, bubbles: true });
  subscriber.dispatchEvent(customEvent);
  setTimeout(fireEvent(subscriber), getRandomInterval(1000, 5000));
};
