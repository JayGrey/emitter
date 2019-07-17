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

const setWatcher = element => {
  setTimeout(() => element.classList.remove('highlighted'), 1000);
};

const appendEvent = (parent, event) => {
  const element = createElement(
    'div',
    { class: 'shout highlighted' },
    createElement(
      'div',
      { class: 'author' },
      document.createTextNode(event.detail.author.name)
    ),
    createElement(
      'div',
      { class: 'text' },
      document.createTextNode(event.detail.text)
    )
  );

  // keep only last 10 shouts
  parent.insertBefore(element, parent.firstChild);
  elements = elements > 10 ? elements : elements + 1;

  if (elements > 10) {
    parent.removeChild(parent.lastChild);
  }

  setWatcher(element);
};

const totals = {};
const totalsElement = document.getElementById('total');
const updateTotals = event => {
  const author = event.detail.author.name;
  totals[author] = (totals[author] || 0) + 1;

  // delete all children from totals
  [...totalsElement.childNodes].forEach(child =>
    totalsElement.removeChild(child)
  );

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
  appendEvent(parentElement, event);
  updateTotals(event);
};
