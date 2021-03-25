const Axios = require('axios')

Axios.get('http://localhost:3000/', {
    responseType: 'stream'
})
    .then(res => {
        res.data.on('data', chunk => {
            console.log(chunk.toString())
        })

        res.data.on('end', () => {
            console.log('fin')
        })
    })