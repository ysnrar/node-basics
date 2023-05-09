const EventEmitter = require('events')

const emitter = new EventEmitter()

//прослушка событий
emitter.on('anything', (data) =>{
    console.log('on anything ', data)
})

//активируем
emitter.emit('anything', {a: 1}) //структура такова emitter.emit('{имя эмит события}, {параметры, которые в прослушке передавались событию}')


class Dispatcher extends EventEmitter{
    subscribe(eventName, cb){
        console.log('subcribe')
        this.on(eventName, cb)
    }

    dispatch(eventName, data){
        console.log('dispatch')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('disEvent', (data) =>{
    console.log(`disEvent is working, data: ${data}`)
})

dis.dispatch('disEvent', 'smth')
