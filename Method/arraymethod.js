//people is array of objects
const people = [
    {name:'abebe',age:25,job:'Boos',id:1,salary:200},
    {name:'mulu',age:35,job:'finace',id:2,salary:300},
    {name:'almaz',age:89,job:'waiting death',id:3,salary:500}
]

//for each
function showPeople(person) {
    console.log(person)
    console.log(person.name)
    console.log(person.age)
    console.log(person.job.toUpperCase())
    return person
}

people.forEach(showPeople)

people.forEach(function(item) {
    console.log(item.name)
})

//map
// does return new array
// doesn't change the size of orginal array and new array
// uses values from the orginal array to make new array

const ages = people.map(function(person) {
    return person.age + 20
})
//=> creating new array
const newPeople = people.map(function(person) {
    return {
        firstname:person.name,
        oldage:person.age
    }
})

//for web templates
const names = people.map(function(person) {
    return `<h1>${person.name}</h1>`
})

document.body.innerHTML = names.join('')

//filter
// does return new array
// can manipulate the size of new array, it might return empty array based on the conditions
// return based on conditions

const filterName = people.filter(function(person) {
    return person.name === 'abebe'
})

const filterAge = people.filter(function(person) {
    return person.age <= 30
})

//find
// does return single instance 
// return first matched, if no matched => undefined
// great for getting unqiue value

const person = people.find(function(person) {
    return person.id === 3
})

const namesList = ['abebe','mulu']
const findName = namesList.find(function(name) {
    return name == 'abebe'
}) 

//reduce
// iterates, callback function
// reduce to single value - number, array, objects
// 1 parameters(acc) = total of all calculations
// 2 parameters(curr) = current iteration/value

const total = people.reduce(function(acc,curr) {
    return curr.salary + acc
},0) // acc inital value is 0

console.log(total)