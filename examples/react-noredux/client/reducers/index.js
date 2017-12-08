import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { fakeReducer } from 'redux-noredux'
import {initialState as todos} from './todos'

export default combineReducers({
  routing,
  todos: fakeReducer(todos),
})