// @flow

export default (reducer: Function) => {
  return {
    type: `@@redux-noredux/${reducer.type || ''}`,
    args: reducer.args,
    reducer,
    noredux: true
  }
}
