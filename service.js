const MyEmitter = require('./eventClass')

class MyService {

    constructor() {
        this.events = new MyEmitter()
    }

    firstAction () {
        // timeout to simulate async actions
        setTimeout(() => {
            this.events.emit('data', 'This is the first action completed')
            this.secondAction()
        }, 1500)
    }

    secondAction () {
        setTimeout(() => {
            this.events.emit('data', 'this is the second action to complete')

            // randomly emit an error for the purpose of our example
            const shouldError = Math.floor(Math.random() * 2)
            
            if (shouldError) {
                this.emitError(new Error('this is a random error simulation'))
            } else {
                this.lastAction()
            }
        }, 1000)
    }

    lastAction () {
        setTimeout(() => {
            this.events.emit('end', 'this successfully completed the actions')
        }, 2500)
    }

    emitError (e) {
        this.events.emit('error', e)
    }

}

module.exports = MyService