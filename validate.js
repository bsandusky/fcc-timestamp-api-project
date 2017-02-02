'use strict'

const validate = (timestamp) => {
    
    let d = null
    
    if (parseInt(timestamp)){
        d = new Date(parseInt(timestamp) * 1000)
    } else {
        d = new Date(timestamp)
    }
    
    if (d != "Invalid Date") return true
    return false
}

module.exports = validate