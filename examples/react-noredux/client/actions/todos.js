import reducer from '../reducers/todos'
import { noreduxAction } from 'redux-noredux'

export const addTodo = (payload)=>noreduxAction(reducer['add todo'](payload))
export const deleteTodo = (payload)=>noreduxAction(reducer['delete todo'](payload))
export const editTodo = (payload)=>noreduxAction(reducer['edit todo'](payload))
export const completeTodo = (payload)=>noreduxAction(reducer['complete todo'](payload))
export const completeAll = (payload)=>noreduxAction(reducer['complete all'](payload))
export const clearCompleted = (payload)=>noreduxAction(reducer['clear complete'](payload))
