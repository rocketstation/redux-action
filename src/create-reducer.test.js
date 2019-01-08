const type = require('./type')
const createReducer = require('./create-reducer')

const initial = {}
const state = {}
const fn = jest.fn((s) => s)

const reducer = createReducer(initial)

beforeEach(() => {
  fn.mockClear()
})

it('uses initial if state is not defined', () => {
  reducer(null, {
    payload: { fn },
    type,
  })

  expect(fn).toHaveBeenCalledWith(initial)
})

it(`passes state to fn if type is ${type}`, () => {
  reducer(state, {
    payload: { fn },
    type,
  })

  expect(fn).toHaveBeenCalledWith(state)
})

it(`returns state if type is not ${type}`, () => {
  expect(reducer(state, { payload: { fn } })).toEqual(state)
  expect(fn).not.toHaveBeenCalled()
})
