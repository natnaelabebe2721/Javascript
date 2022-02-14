const colors = ["red","green","blue","orange"]

const clickbtn = document.querySelector('.btn')
const colortext = document.querySelector('.color')
const div = document.querySelector('.section')


clickbtn.addEventListener('click', function() {
    const rand = getColors()  // try the function here
    document.body.style.backgroundColor = colors[rand]  // change bg of body
    colortext.textContent = colors[rand]  // change the text of div by color name
})

function getColors() {
    return Math.floor(Math.random() * colors.length)   // get random number b/n 0-3 
}