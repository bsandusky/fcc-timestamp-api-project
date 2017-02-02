var express = require("express")
var validate = require("./validate")
var app = express()

var response = {unix: null, natural: null}

app.get('/', (req, res) => {
    res.send(response)
})

app.get('/:timestamp', (req, res) => {
    
    if (validate(req.params.timestamp)) {
        res.send(req.params.timestamp)
    } else {
        res.send("Not a valid date")
    }
})

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
})