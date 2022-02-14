
const names = ['selam','nati']
const lastnames = ['girmay','abebe']

//length
const size = names.length()

//concate array
const allnames = names.concat(lastnames)

//add at the begining
names.unshift('Mulualem')

//remove at the begining
names.shift('Mulualem')

//push at the end
names.push('Mulualem')

//pop at the end
names.pop('Mulualem')

//reverse 
names.reverse()

//splice - mutates the original array
const spec = names.splice(2,2) //start from index 2 and remove two elements



