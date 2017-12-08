// @flow

export default (reducer: Function)=>{
  return {
    type: reducer.type,
    args: reducer.args,
    reducer,
    noredux: true,
  }
}