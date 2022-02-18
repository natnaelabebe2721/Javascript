
// date counting
const items = document.querySelectorAll('.date-counter')
let futureDate = new Date(2025,3,15,3,25,0)  // this is the date when counting stops

// get future date in ms 

let futureTime = futureDate.getTime()
const today = new Date().getTime() // today


function calculateDate () {
    
   
    const time = futureTime - today // left time in ms

    /*
     * 1s = 1000ms
     * 1m = 60s
     * 1h = 60 min
     * 1 day = 24 hrs
     * / 
     * */

    const oneday  = 24*60*60*1000
    const onehour = 60*60*1000
    const onemin = 60*1000
    
    let leftDays = Math.floor (time / oneday) // left days
    let leftHours = Math.floor ((time % oneday) / onehour)  // left hours
    let leftMins = Math.floor ((time % onehour) / onemin) // left mins
    let leftSeconds = Math.floor ((time % onemin) / 1000) // left seconds

    const values = [ leftDays, leftHours, leftMins, leftSeconds]

    function format (item) {
        if (item < 10) {
            return item = `0${item}`
        }
        else {
            return item
        }
    }

    if (time > 0) {
        items.forEach( function (item,index) {
            item.innerHTML = format (values[index])
        })
    }
    else {
        // time is up
        items.innerHTML = `<p>Counting Stop. Time is exipred</p>`
    }
}


/**Or */
let countDown = setInterval (calculateDate, 1000) // call every 1000 ms => 1 s
calculateDate()