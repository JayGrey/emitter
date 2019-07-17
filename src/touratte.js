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

const textsList = [
  'I wasn`t able to speak the local language. So I had trouble communicating.',
  'She had spent nearly all our money. So we couldn`t afford to stay at a hotel.',
  'We use still to say that a situation or action is continuing. lt hasn`t changed or stopped.',
  'I used to be an adventurer like you. Then I took an arrow in the knee.',
  'These pictures are really awful. Even I take better pictures than these.',
];

const getRandomInterval = (from, to) => Math.floor(Math.random() * to) + from;

const getRandomAuthor = () =>
  authorsList[getRandomInterval(0, authorsList.length)];

const getRandomText = () => textsList[getRandomInterval(0, textsList.length)];

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

  console.log('emitt event "shout" with data:', detail);

  const customEvent = new CustomEvent('shout', { detail, bubbles: true });
  subscriber.dispatchEvent(customEvent);
  if (!stopEmmiting) {
    setTimeout(fireEvent(subscriber), getRandomInterval(1000, 5000));
  }
};
