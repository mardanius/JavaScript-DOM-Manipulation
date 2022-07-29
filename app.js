/*=========================
JavaScript DOM Manipulation
===========================

/*=======
SELECTORS
=========

// Get element by id

const title = document.getElementById('main-heading');
console.log(title)

// Get element by className

const items = document.getElementsByClassName('list-items')
items[3] = 'Gladiator';
console.log(items[3])

// Get element by tagName

const tagName = document.getElementsByTagName('li')
console.log(tagName)

// QuerySelector

const container = document.querySelector('div')
console.log(container)

// QuerySelectorAll

const containers = document.querySelectorAll('div')
console.log(containers) */

/*==============
STYLING ELEMENTS
================

// Changing the color of the title
const title = document.querySelector('#main-heading');

title.style.color = "red";

// Chaning the size of the list items

const list_items = document.querySelectorAll('.list-items');

// Note, in JS we use camel notation: fontSize instead of font-size.
//list_items.style.fontSize = '100px';

for (let i = 0; i < list_items.length; i++) {
    list_items[i].style.fontSize = '30px';
}
*/

/*===============
CREATING ELEMENTS
================*/

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// ul.append(li);

// li.innerText = 'Burt Munro, un suenho una leyenda' // Recommended
// li.innerHTML = 'Burt Munro, un suenho una leyenda' // Not recommended for security.
