import { createStore, applyMiddleware } from 'redux'
import { logger } from '../middleware'
import rootReducer from '../reducers'
import {enableNoredux} from 'redux-noredux'

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    logger
  )(create)
  const store = createStoreWithMiddleware(enableNoredux(rootReducer), initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(enableNoredux(nextReducer))
    })
  }

  return store
}