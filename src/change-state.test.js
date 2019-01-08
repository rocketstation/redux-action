const type = require('./type')
const changeState = require('./change-state')

const fn = (s) => s

it(`creates action`, () => {
  expect(changeState(fn)).toEqual({
    type,
    payload: { fn },
  })
})
