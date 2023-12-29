const SECONDS_IN_MINUTE = 60
const SECONDS_IN_HOUR = 3600
const SECONDS_IN_DAY = 86400
const SECONDS_IN_WEEK = 604800
const SECONDS_IN_MONTH = 2629800
const SECONDS_IN_YEAR = 31557600

const MILLISECONDS_IN_SECOND = 1000

function getTimeAgo(date) {

    const currentDate = Date.now()

    const secondsDifference = Math.floor( Math.abs(currentDate - date)/MILLISECONDS_IN_SECOND)

    if(secondsDifference < SECONDS_IN_MINUTE) return `${secondsDifference} seconds`
    if(secondsDifference < SECONDS_IN_HOUR) return `${Math.floor(secondsDifference / SECONDS_IN_MINUTE)} minutes`
    if(secondsDifference < SECONDS_IN_DAY) return `${Math.floor(secondsDifference / SECONDS_IN_HOUR)} hours`
    if(secondsDifference < SECONDS_IN_WEEK) return `${Math.floor(secondsDifference / SECONDS_IN_DAY)} days`
    if(secondsDifference < SECONDS_IN_MONTH) return `${Math.floor(secondsDifference / SECONDS_IN_WEEK)} days`
    if(secondsDifference < SECONDS_IN_YEAR) return `${Math.floor(secondsDifference / SECONDS_IN_MONTH)} days`
}

// function getTimeAgo(date) {
//
//     const currentDate = Date.now()
//
//     const secondsDifference = Math.abs(currentDate - date)/1000
//
//     if(secondsDifference < SECONDS_IN_MINUTE) return `${secondsDifference} seconds`
//     if(secondsDifference < SECONDS_IN_HOUR) return `${secondsDifference % SECONDS_IN_MINUTE} minutes`
//     if(secondsDifference < SECONDS_IN_DAY) return `${secondsDifference % SECONDS_IN_HOUR} hours`
//     if(secondsDifference < SECONDS_IN_WEEK) return `${secondsDifference % SECONDS_IN_DAY} days`
//     if(secondsDifference < SECONDS_IN_MONTH) return `${secondsDifference % SECONDS_IN_WEEK} days`
//     if(secondsDifference < SECONDS_IN_YEAR) return `${secondsDifference % SECONDS_IN_MONTH} days`
// }

export {
    getTimeAgo
}