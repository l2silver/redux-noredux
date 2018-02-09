// @flow
import noreduxAction from '../noreduxAction'

export default function noreduxActionBatch(reducers: Object) {
  return Object.keys(reducers).reduce((finalResult, key) => {
    finalResult[key] = (...args) => noreduxAction(reducers[key](...args))
    return finalResult
  }, {})
}
