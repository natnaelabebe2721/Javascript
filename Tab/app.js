// Create transition between tabs

const description = [
    {
        dataid : 'vision',
        description: 'This is vision'
    },
    {
        dataid: 'mission',
        description: 'This is mission'
    }
]

const tabSection = document.querySelector('.tab-section') // the whole tab section
const btns = document.querySelectorAll('.tab-btns') // tab buttons
const body = document.querySelector('.body') // tab body

tabSection.addEventListener('click', event => {
    // find which tab is click
    const id = event.currentTarget.dataset.id
    btns.forEach( function (btn) {
        if (id != btn.getAttribute('data-id')) {
            btn.classList.remove('active')
        }
        else {
            btn.classList.add('active')
        }
    })

    description.forEach( function (desc) {
        if (id === desc.description) {
            body.innerHTML = desc.description
        }
    })
})