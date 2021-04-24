const express = require('express')
const app = express()
const port = 3000

const MyService = require('./service')

app.get('/', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*')

    const svc = new MyService()

    svc.events.on('data', data => {
        res.write(data)
    })    

    svc.events.on('end', (data) => {
        res.write('success!')
        res.end()
    })

    svc.events.on('error', e => {
        console.log(e)
        res.write(e.message)
        res.end()
    })

    svc.firstAction()

})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})