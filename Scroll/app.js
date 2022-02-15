/*  Element.getBoundingClientRect() => return the size and the postion of the element relative to 
         view port

    pageYOfset - read - only window property that returns the number of PX the document has been scrolled vertically

    slice - extratcs a section of a string without modifying original string 
    offsetTop - a number, representing the top postion of the element in PX 

*/

// let's change div height dynamically based on menu items number

const navToggle = document.querySelector('.toggle')
const linkContainer = document.querySelector('.nav-links')
const links = document.querySelectorAll('.links')

// by default the container height is 0
navToggle.addEventListener('click', event => {
    const divHeight = linkContainer.getBoundingClientRect().height  // getting the height of the container
    const linkHeight = links.getBoundingClientRect().height  // getting the height of links

    // we want have the height of container equal to the height of links or increase by some
    if (divHeight === 0) {
        linkContainer.style.height = `${linkHeight}px`
        // linkContainer.style.height = `${linkHeight + 20}px`
    }

    else {
        linkContainer.style.height = 0  // this is used for mobile toggle when the menu collapse
    }
})

// let add a class to nav bar on scroll
// go to top 

const navBar = document.querySelector('.navbar')
const navHeight = navBar.getBoundingClientRect().height
const topArrow = document.querySelector('.go-top')

window.addEventListener('scroll', event => {
    const windowHeight = window.pageYOffset

    switch (windowHeight > navHeight) {
        
        case true :
            navBar.classList.add('fixed-nav')
            navBar.classList.remove('transparent')
            break
        
        case false :
            navBar.classList.add('transparent')
            navBar.classList.remove('fixed-nav')
            break
    }

    switch (windowHeight > 500) {

        case true :
            topArrow.classList.add('show-link')
            topArrow.classList.remove('hide-link')
            break
        default :
            topArrow.classList.remove('show-link')
            topArrow.classList.add('hide-link')
    }

})

// go to section when menu clicked 
const scrollLinks  = document.querySelectorAll('.nav-links')

scrollLinks.forEach( function(item) {
    item.addEventListener('click', event => {
        const id = event.currentTarget.getAttribute('href').slice(1)  // slice gives the name of the id
        // let's consider here we have nav bars
        const navBar = document.querySelector('.nav-bar')
        const fixedBar = navBar.classList.contains('fixed-nav')
        const height = navBar.getBoundingClientRect().height

        let pos = document.getElementById(id).offsetTop - height // offSetTop gives the pos of element in px and remove nav height
        if (!fixedBar) { // if it is transparent background
            pos = pos - height
        }
        if (navHeight > 82) {
            const navDiv = document.querySelector('.nav-div')
            const divHeight = navDiv.getBoundingClientRect().height

            pos = pos + divHeight  // because on mobile toggle after menu item selected, menu is hidden
        }
        window.scrollTo({
            left: 0,
            top: pos // scroll to this pos
        })
    })
})
