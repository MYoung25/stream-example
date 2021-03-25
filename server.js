const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    let i = 0;
    let limit = 5

    const int = setInterval(() => {

        if ( i < limit ) {
            i++
            res.write(`this is chunk: ${i} of ${limit}`)
        } else {
            clearInterval(int)
            res.end()
        }

    }, 1000)

})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })