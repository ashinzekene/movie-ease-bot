import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
// import { saveState, getState } from './localStore'
// import createStoreObserver from  'redux-store-observer'

const store = createStore(reducers, applyMiddleware(thunkMiddleware) )

// export const store = createStore(reducers, localState, applyMiddleware(thunkMiddleware) )
// store.subscribe(() => {
//   saveState({
//     songs: store.getState().songs
//   })
// })

export default store