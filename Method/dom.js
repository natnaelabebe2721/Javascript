// window = browser api
// 

const btn = document.getElementById('btn')
const name = btn.nodeName
const css = btn.style // helps to know what kind of css can be applied to button



//for list <ul>

const list = document.getElementsByTagName('li')

const items = [...list]

items.forEach(function(item) {
    console.log(item) //return each li tag
})

// querySelector (selector) => Single elements
// querySelectorAll (selector) => all elements
// selector can be id, className
document.querySelector('.elements') //returns node list accessed by index starting from 0
document.querySelector('#elements') //returns node list accessed by index starting from 0

const nodes = document.querySelectorAll('.btn')

nodes.forEach(function(node) {
    return node.nodeName
})

// whitespace treated as text node
// previousElementSilibling => return the previous element
// nextElementSilibling => return next element

// node value
// textcontent

