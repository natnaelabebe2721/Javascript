// counting 

const btns = document.querySelectorAll('.btn')
const value = document.querySelector('.number')

let num = 0

btns.forEach( function (btn) {
    btn.addEventListener('click', event => {
        const target = event.currentTarget.classList
        if (target.contains('dec')) {
            num --
        }
        else if (target.contains('in')) {
            num ++
        }
        else {
            num = 0
        }
        value.setAttribute('data-number',num)
        value.innerHTML = num
    })
})