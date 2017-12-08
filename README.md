# noredux (Not Only Redux)

noredux is a non-event-driven version of redux. 

# Install

```
yarn add redux redux-noredux noredux
```

# Usage

```
import {createStore} from 'redux'
import {enableNoredux, noreduxAction} from 'redux-noredux'

const reducer2InitialState = 1

const reducer = (state, action)=>state

const store = createStore(enableNoredux(reducers), {reducer2: reducer2InitialState})

const reducer2 = (state)=>({...state, reducer2: state.reducer2 + 1})

store.dispatch(noreduxAction(reducer))

console.log(store.getState())

/*
  {
    reducer2: 2
  }
*/
```

# Usage with combineReducers

```
import {createStore, combineReducers} from 'redux'
import {fakeReducer, enableNoredux, noreduxAction} from 'redux-noredux'

const reducer2InitialState = 1

const reducers = combineReducers({
  reducer1: (state=null, action)=>state
  reducer2: fakeReducer(reducer2InitialState)
})

const store = createStore(enableNoredux(reducers))

const reducer2 = (state)=>({...state, reducer2: state.reducer2 + 1})

store.dispatch(noreduxAction(reducer))

console.log(store.getState())
/*
  {
    reducer1: null,
    reducer2: 2
  }
*/
```

# defining action type, and args

The noreduxAction function takes the reducer function as it's only argument. It looks to the reducer function for the properties type and args.

```
import {noreduxAction} from 'redux-noredux'

const reducerCreator = (...args)=>{
  const reducer = (state)=>nextState
  reducer.type = 'example type'
  reducer.args = args
  return reducer
}

const reducer = reducerCreator(1, 2)
console.log(noreduxAction(reducer))

/*
  {
    type: '@@redux-noredux/example type',
    args: [1, 2],
    reducer,
    noredux: true
  }
*/
```

# Example App

Checkout the examples section for a working example of a react-noredux app
