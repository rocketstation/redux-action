import ACTION_TYPE from './action-type'

export default (fn) => ({
  payload: { fn },
  type: ACTION_TYPE,
})
