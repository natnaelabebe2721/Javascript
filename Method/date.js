const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

const weekDays = [
    'Sunday',
    'Monday',
    'Tuseday',
    'Wednsday',
    'Thrusday',
    'Friday',
    'Saturday'
]

//get current date
const date = new Date()

//get day
const day = date.getDay() //return week day number
const month = date.getMonth() //return month number
const year = date.getFullYear()
const weekday = date.getDate() //return day number

