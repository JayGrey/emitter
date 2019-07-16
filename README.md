Don't use any libraries, only vanilla JS

Create 2 scripts - touratte.js (Event Dispatcher) and renderer.js

Use the following authors:
```js
const authorsList = [
    {
        _id: 1
        name: 'Todd',
    },
    {
        _id: 3
        name: 'Rob',
    },
    {
        _id: 3
        name: 'Sevil',
    },
];
```
touratte.js should
1. Create CustomEvent with name shout and detail with the random author (from authorsList) and randomly generated text.
2. The script will dispatch the event on a random interval (1-5 seconds)

renderer.js should
1. Listen to dispatched Event shout.
2. Add to the page caught shout with author name and text.
3. Add to the page the list of authors with the count of shouts.

How the task will be rated:

Appearance and usability
Code style

How to deliver the task:
Place it in your Github
Deploy web app (we don't care where easiest would be Github Pages)
Send us the link to hiring@lambdabird.com with Github link and deployed the site
Bonus points:

On each new Event shout the new element should be highlighted for 1 second
Add ability to stop event dispatching
link
