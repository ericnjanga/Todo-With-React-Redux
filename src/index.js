// React library and it's render function (from its DOM package)
import React from 'react'
import { render } from 'react-dom'
// Redux: Predictable state container for JavaScript apps (https://redux.js.org/)
// React bindings for Redux (https://react-redux.js.org)
// What is a provider ???
import { Provider } from 'react-redux'
import reduxStore from './store'
import App from './components/App'

render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('app-root')
);
