import ACTION_TYPE from './action-type'

export default (state, { payload, type }) => type === ACTION_TYPE ? payload.fn(state) : state
