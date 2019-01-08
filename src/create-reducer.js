var type = require('./type')

module.exports = function(initial) {
  return function(state, action) {
    var s = state || initial

    return action.type === type ? action.payload.fn(s) : s
  }
}
