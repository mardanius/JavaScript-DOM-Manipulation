// DOM Manipulation

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
console.log(containers)