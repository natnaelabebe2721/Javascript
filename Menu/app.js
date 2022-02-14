// add menu dynamically
const menu = [
    {
        id: 1,
        name: 'Burger',
        img: '../Menu/pexels-rajesh-tp-1633578.jpg',
        price: 'ETB 200',
        catagory:'burger'
    },
    {
        id: 2,
        name: 'Pissa',
        img: '../Menu/pexels-pixabay-315755.jpg',
        price: 'ETB 200',
        catagory:'pissa'
    }
]

const menuSection = document.querySelector('.section')

// we use map array function for web template

// load all foods when the doc loaded 
window.addEventListener('DOMContentLoaded', event => {
   
    /* let displaymenu = menu.map( function(food) {
        return `<article class="menu">
            <img src=${food.img} class="img" alt="Image missed" width="150px" height="150px">
            <h1 class="name">${food.name}<br><span class="price"> ${food.price} </span></h1>
        </article>`
    })

    menuSection.innerHTML = displaymenu.join('')*/
    displayItems ('all')

    const btnsContainer  = document.querySelector('.btnsection')
     /// Let's create category dynamically

    // add category button

    /// reduce the menu category
    const categ = menu.reduce( function (acc,curr) {   // acc is category and curr the current menu item
        if ( !acc.includes(curr.catagory) ) {
            acc.push(curr.catagory)
        }
        return acc
    },['all']) // all the common category

    let btns = categ.map( function(catagory) {
        return ` <button class="btn" data-id="${catagory}">${catagory}</button>`
    })

    btnsContainer.innerHTML = btns.join('')

    // filter 
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach( function(btn) {
        btn.addEventListener('click', event => {
            
            /*let displaySelected = menu.map ( function(item) {
                    const catagory = event.currentTarget.dataset.id
                    if (event.currentTarget.dataset.id === "all") {

                        return `<article class="menu">
                                        <img src=${item.img} class="img" alt="Image missed" width="150px" height="150px">
                                        <h1 class="name">${item.name}<br><span class="price"> ${item.price} </span></h1>
                                    </article>`
                    }
                    else if (item.catagory === event.currentTarget.dataset.id) {

                        return `<article class="menu">
                                        <img src=${item.img} class="img" alt="Image missed" width="150px" height="150px">
                                        <h1 class="name">${item.name}<br><span class="price"> ${item.price} </span></h1>
                                    </article>`
                    }    
                })

                menuSection.innerHTML = displaySelected.join('')*/

                const category = event.currentTarget.dataset.id
            
                console.log(categ)
                menu.filter ( function (item) {

                    if (category === 'all') {
                        return displayItems ('all')
                    }
                    else {
                        return displayItems (category)
                    }
                })
        })
    })
    
})


function displayItems (category) {
    let displayItem = menu.map( function (item) {
        if (category === 'all') {
            return `<article class="menu">
                        <img src=${item.img} class="img" alt="Image missed" width="150px" height="150px">
                        <h1 class="name">${item.name}<br><span class="price"> ${item.price} </span></h1>
                    </article>`
        }
        else if ( item.catagory === category ) {
            return `<article class="menu">
                            <img src=${item.img} class="img" alt="Image missed" width="150px" height="150px">
                            <h1 class="name">${item.name}<br><span class="price"> ${item.price} </span></h1>
                        </article>`
        }
        
    }) 

    menuSection.innerHTML = displayItem.join('')
}



