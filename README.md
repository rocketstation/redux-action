# Redux Action

Redux Action provides reducer, which is used to process any change of the state, & action creator, which initiates any change of the state

## Installation

```
npm i @rocketstation/redux-action
```

## Usage

```javascript
import { reducer } from 'redux-action'

const store = createStore(reducer)
```

```javascript
import { actionCreator } from 'redux-action'

dispatch(change((s) => s))
```

## Motivation

We were tired of writing this code again and again

## License

Redux Action is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
