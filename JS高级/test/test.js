class EventBus {
  constructor() {
    this.eventBus = {}
  }
  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    handlers.push({
      eventCallback,
      thisArg
    })
  }
  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payload)
    })
  }
  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    const newHandlers = [...handlers]
    for (let i = 0; i < newHandlers.length; i++) {
      const handler = newHandlers[i]
      if (eventCallback === handler.eventCallback) {
        const index = handlers.indexOf(handler)
        handlers.splice(index, 1)
      }
    }
  }
}

const eventBus = new EventBus()

const log = content => console.log(content + '@')

eventBus.on('test', log)

eventBus.emit('test', 'hello world')

eventBus.off('test', log)

eventBus.emit('test', 'hello world')