b// addEventListener() => 

const btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    console.log(`Hello world`)
})

function doSome () {
    console.log(`do something`)
}

btn.addEventListener('hover', doSome)

// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moveonto element
// mouseleave - move out of element
// keypress - when the key is pressed
// keyup - when key is released
// keydown - when key is down


const names = document.querySelector('.input')

names.addEventListener('keypress', function() {
    console.log(`key pressed`)
})
// helps in validation
names.addEventListener('keyup', function() {
    console.log(names.value) //get input value everytime when key is release
})

// event object arg => e,evt
// info about triggered event
// event.type => get event type
// event.currentTarget => node that the event is performed
// this keyword => the node 
// preventDefault() => prevent default behaviour 

names.addEventListener('click', function(event) {
    console.log(event.currentTarget) // return the node
    console.log(this) // return names node
    event.currentTarget.classList.add('blue')

    console.log(event.type) // return click
})

function prevent(event){
    event.preventDefault()
}

names.addEventListener('click', prevent)

// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

/*
  <button class='.btn><strong>Hello</strong>world</button>
*/
const btns = document.querySelector('.btn')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        event.currentTarget.style.color = 'blue' // change the button text to blue
        event.target.style.color = 'green' //  if Hello clicked only hello changed, same too world
    })

})

// selecting elements dynamically
// event propagation => order the events are fired
// event bubbling => clicked element first the bubble up -- default
// event capturing => fires start from root until reaches target



