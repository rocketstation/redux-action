import actionType from './action-type'
import reducer from './reducer'

it(`passes state to action.payload.fn && returns result if action type === ${actionType}`, () => {
  const state = {}
  const action = {
    type: actionType,
    payload: { fn: jest.fn((obj) => obj) }
  }

  expect(reducer(state, action)).toEqual(state)
  expect(action.payload.fn).toBeCalledWith(state)
})


it(`returns state if action type !== ${actionType}`, () => {
  const state = {}
  const action = { type: '' }

  expect(reducer(state, action)).toEqual(state)
})
