// functions is first class objects that can be stored in var or expression or 
//passed as args to another function (call back functions)

//no params for call back function
function morining() {
    console.log("Good morining")
    return 'Good morining'
}

function great(name,cb) {
    const myName = 'bob'
    cb()
    //console.log(`No Params -- ${name} - ${myName}`)
    return `No Params -- ${name} - ${myName}`
}

console.log(great('nati',morining))

//params for call back
function morining2(name) {
    //console.log(`Good morining ${name}`)
    return `Good morining ${name}`
}

function great2(name,cb) {
    const myName = 'bob'
    return `${cb(name)} - ${name} - ${myName}`
}

console.log(great2('bob',morining2))

