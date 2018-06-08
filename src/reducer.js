import { Map } from 'immutable'

import ACTION_TYPE from './action-type'

export default (state = Map(), { payload, type }) => type === ACTION_TYPE ? payload.fn(state) : state
