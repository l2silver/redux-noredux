// @flow
import scopeReducers from 'noredux/lib/scopeReducers'
import noreduxActionBatch from './'


describe('noreduxActionBatch', ()=>{
  it('returns actions', ()=>{
    const reducers = {
      create: (payload)=>(state)=>(payload),
    };
    const noreduxReducers = noreduxActionBatch(reducers)
    expect(noreduxReducers.create(1)).toMatchSnapshot()
  })
  it('returns actions with noredux wrappings', ()=>{
    const reducers = {
      create: (payload)=>(state)=>(payload),
    };
    const noreduxReducers = noreduxActionBatch(scopeReducers('users', reducers))
    expect(noreduxReducers.create(1)).toMatchSnapshot()
  })
})