// @flow

const noreduxReducer = (state, action)=>{
  return action.reducer(state)
}

export default (reducers: Function)=>{
  return (state: any, action: Object)=>{
    if (action.noredux) {
      return noreduxReducer(state, action)
    }
    return reducers(state, action)
  }
}