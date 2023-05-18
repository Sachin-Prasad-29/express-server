const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/app', (req, res) => {
    console.log('[- GET API CALLED -]')
    res.send({ status: true, msg: 'Hello From Express app' })
})

app.post('/app', (req, res) => {
    console.log('[- POST API CALLED -]')
    res.send(req.body)
})

app.listen(8080, () => {
    console.log('Server is running at http://localhost:8080')
})
