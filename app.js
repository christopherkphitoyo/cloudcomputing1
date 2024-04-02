'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('christopher kp\n nim: 52022901\n jurusan : teknik informatika\n')
   
   
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
