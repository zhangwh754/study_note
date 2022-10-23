import { EventEmitter } from 'events'

const emitter = new EventEmitter()

const log = arg => console.log(arg)

emitter.once('foo', log)

emitter.emit('foo', 'zwh')

emitter.emit('foo', 'zwh')