var type = require('./type')

module.exports = function(fn) {
  return {
    payload: { fn: fn },
    type: type,
  }
}
