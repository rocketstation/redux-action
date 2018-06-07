import actionType from './action-type'
import actionCreator from './action-creator'

it('receives function & returns object with type === `change` & payload === received function', () => {
  const fn = () => {}

  expect(actionCreator(fn)).toEqual({
    type: actionType,
    payload: { fn }
  })
})
