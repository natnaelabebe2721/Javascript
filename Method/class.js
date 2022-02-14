// className
// classList

const head = document.getElementById('#heading')
const para = document.getElementById('#para')

para.className('colors') //gives colors class

para.className('colors')
para.className('text') // it only gives text class by overriding colors class

para.className('colors text') // it gives both classes

para.classList.add('colors') // gets colors class
para.classList.add('text') // gets text class

// classList methods

para.classList.add('bold') // add
para.classList.toggle('bold') // add if there isn't otherwise remove it
para.classList.remove('bold') // remove
let bool = para.classList.contains('bold') // check wheather it contians

// createElement('tagname')
// createTextNode('text content')
// element.appendChild(childElement)
// append => add the node next to the last node
// appendChild => add the node as child

const div = document.createElement('div') // creates empty div
const text = document.createElement('h1') 

const addText = document.createTextNode('Hello world') // creating text

div.appendChild(text) // add h1 to div
div.appendChild(addText) // add text node to div

document.body.appendChild(div) // add div to document

// insertBefore(node, node1) node - to be add , node1 - reference node

// replaceChild(new,old) => replace node
 document.body.replaceChild(div,text)


 // prepend
 // innerText

 const heading = document.body.createElement('h1')
 heading.innerText = `hello` // add text
 document.body.prepend(heading) // add heading at the top

 // remove
 // removeChild

 const ele = document.getElementById('#ele')
 ele.remove() // remove ele 
 ele.removeChild(child) // remove child of ele

 // innerHTML => helps to add html element or text content
 // textContent => helps to add text content only

 const elem = document.getElementById('#div')
 
 elem.innerHTML(`<li>Hello</li>`)
 elem.innerHTML(`Hello world`)

 elem.textContent(`Hello world`)

