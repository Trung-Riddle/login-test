import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reduxStore from './store'
import { Provider } from 'react-redux'
import React from 'react'

const { store } = reduxStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <App />
    </Provider>

)
