// web storage api - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name','jhon') => works even tab closed
// sessionStorage.setItem('name','jhon') => works only until the tab is opened

localStorage.setItem('key','value')
const names = localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.clear() // remove all 


// JSON.stringify  , JSON.parse
// this methods helps to dealing with array

const users = ['abebe','mulu']

localStorage.setItem('users', JSON.stringify(users)) // change the string array to json

const user = JSON.parse(localStorage.getItem(users)) // parse the json

console.log(user[0])

// condtions

if(localStorage.getItem('users')) {
    const use = JSON.parse(localStorage.getItem('users'))
    use.forEach(element => {
       console.log(element) 
    })
    use.forEach(function(ele) {
        console.log(ele)
    })
}