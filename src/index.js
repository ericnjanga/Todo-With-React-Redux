// React library and it's render function (from its DOM package)
import React from 'react'
import { render } from 'react-dom'
// Redux: Predictable state container for JavaScript apps (https://redux.js.org/)
// What is createStore ???
import { createStore } from 'redux'
// React bindings for Redux (https://react-redux.js.org)
// What is a provider ???
import { Provider } from 'react-redux'

// Reducers tie the "state" and "action" together
import rootReducer from './reducers'
import App from './components/App'

// What is a store ???
const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root')
);
