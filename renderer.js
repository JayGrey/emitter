// renderer.js should
// 1. Listen to dispatched Event shout.
// 2. Add to the page caught shout with author name and text.
// 3. Add to the page the list of authors with the count of shouts.

const createElement = (tagname, attributes, ...children) => {
  const element = document.createElement(tagname);
  children.forEach(child => element.appendChild(child));
  Object.entries(attributes).forEach(([key, value] = attribute) =>
    element.setAttribute(key, value)
  );
  return element;
};

let elements = 0;
const parentElement = document.getElementById('renderer');

const appendEvent = (parent, event) => {
  // create element from event
  const element = createElement(
    'div',
    { class: 'shout' },
    createElement(
      'div',
      { class: 'author' },
      document.createTextNode(`#${event.detail.id} ${event.detail.author.name}`)
    ),
    createElement(
      'div',
      { class: 'text' },
      document.createTextNode(event.detail.text)
    )
  );

  // add first element
  parent.insertBefore(element, parent.firstChild);
  elements = elements > 10 ? elements : elements + 1;

  // remove last element from parent
  if (elements > 10) {
    parent.removeChild(parent.lastChild);
  }
};

const totals = {};
const totalsElement = document.getElementById('total');
const updateTotals = event => {
  const author = event.detail.author.name;
  totals[author] = (totals[author] || 0) + 1;

  // delete all children from totals
  while (totalsElement.firstChild) {
    totalsElement.removeChild(totalsElement.firstChild);
  }

  // fill entries
  Object.entries(totals).forEach(entry => {
    totalsElement.appendChild(
      createElement(
        'div',
        {},
        createElement('span', {}, document.createTextNode(`${entry[0]}: `)),
        createElement('span', {}, document.createTextNode(entry[1]))
      )
    );
  });
};

const renderEvent = event => {
  // console.log('cought event "shout" with data:', event.detail);
  appendEvent(parentElement, event);
  updateTotals(event);
};
