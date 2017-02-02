var express = require("express")
var validate = require("./validate")
var processDate = require("./processDate")
var app = express()

var response = {unix: null, natural: null}

app.get('/', (req, res) => {
    res.send(response)
})

app.get('/:timestamp', (req, res) => {
    
    if (validate(req.params.timestamp)) {
        res.send(processDate(req.params.timestamp))
    } else {
        res.send(response)
    }
})

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
})