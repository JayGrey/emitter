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

const textslist = [
  'Joe was playing football. He hurt his knee.',
  'I wasn`t able to speak the local language. So I had trouble communicating.',
  'We had spent nearly all our money. So we couldn`t afford to stay at a hotel.',
  'We use still to say that a situation or action is continuing. lt hasn`t changed or stopped.',
  'These pictures are really awful. Even I take better pictures than these.',
];

const getRandomAuthor = () =>
  authorsList[Math.floor(Math.random() * authorsList.length)];

const getRandomText = () =>
  textslist[Math.floor(Math.random() * textslist.length)];

const getRandomInterval = (from, to) => Math.floor(Math.random() * to) + from;

let stopEmmiting = false;

const startEmmiter = eventTarget => {
  const renderer = document.getElementById('bottom');
  stopEmmiting = false;

  setTimeout(fireEvent(eventTarget), getRandomInterval(1000, 5000));
};

const fireEvent = subscriber => () => {
  const detail = {
    author: getRandomAuthor(),
    text: getRandomText(),
  };

  console.log('emit event "shout" with data:', detail);

  const customEvent = new CustomEvent('shout', { detail, bubbles: true });
  subscriber.dispatchEvent(customEvent);
  if (!stopEmmiting) {
    setTimeout(fireEvent(subscriber), getRandomInterval(1000, 5000));
  }
};
