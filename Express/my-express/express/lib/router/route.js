const methods = require('methods')
const Layer = require('./layer')

function Route () {
  this.stack = []
}

Route.prototype.dispatch = function (req, res, out) {
  let index = 0
  const method = req.method.toLowerCase()
  const next = () => {
    if (index >= this.stack.length) {
      return out()
    }
    const layer = this.stack[index++]
    if (layer.method === method) {
      return layer.handler(req, res, next)
    }
    next()
  }

  next()
}

methods.forEach((method) => {
  Route.prototype[method] = function (path, handlers) {
    handlers.forEach((handler) => {
      const layer = new Layer(path, handler)
      layer.method = method
      this.stack.push(layer)
    })
  }
})

module.exports = Route