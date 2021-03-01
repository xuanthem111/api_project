import React from 'react'
import {Provider} from 'react-redux'
import store from './redux'
import AppRouter from './Router'

export default function App() {
  return (
    <Provider store = {store}>
      <AppRouter />
    </Provider>
  )
}
