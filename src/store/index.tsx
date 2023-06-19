import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducers from './reducers/rootReducers'

const reduxStore = () => {
  const store = createStore(
    rootReducers,
    // composeEnhancers(),
    applyMiddleware(thunk)
  )
  return { store }
}
export default reduxStore
