'use strict'

const processDate = (timestamp) => {
    
    let monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    if(parseInt(timestamp)) {
        let d = new Date(parseInt(timestamp) * 1000)
        let str = "" + monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()
        return {unix: parseInt(timestamp), natural: str }
    } else {
        return {unix: new Date(timestamp).getTime() / 1000, natural: timestamp}
    }
}

module.exports = processDate