import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>+++ First react app with Webpack????</h1>
      <div>
        <h2>Thoughts</h2>
        <div>
          <h3>Container component</h3>
          <p>React component that uses `store.subscribe()` to read a pat of the Redux state tree and supply props to a presentational component it renders.</p>
        </div>
        <div>
          <h3>Difference between Presentational and Container components</h3>
          <table>
            <thead>
              <tr>
                <th>...</th>
                <th>Presentational Components</th>
                <th>Container Components</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Purpose</th>
                <th>How things look (markup, styles)</th>
                <th>How things work (data fetching, state updates)</th>
              </tr>
              <tr>
                <th>Aware of Redux</th>
                <th>No</th>
                <th>Yes</th>
              </tr>
              <tr>
                <th>To read data</th>
                <th>Read data from props</th>
                <th>Subscribe to Redux state</th>
              </tr>
              <tr>
                <th>To change data</th>
                <th>Invoke callbacks from props</th>
                <th>Dispatch Redux actions</th>
              </tr>
              <tr>
                <th>Are written</th>
                <th>By hand</th>
                <th>Usually generated by React Redux</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>Performance</h3>
          <p>`connect()` optimize the code and prevent unnecessary re-renders.</p>
        </div>
        <div>
          <h2>Interraction with Redux</h2>
          <h3>Reading from Redux store</h3>
          <p>You can define a spacial function `mapStateToProps` which describes how to transform the current Redux store state into the props you want to pass to a presentational component.</p>
          <h3>Dispatching to Redux store</h3>
          <p>You can define a spacial function `mapDispatchToProps` which receives a `dispatch()` method and returns callback props that you want to inject into the presentational component.</p>
        </div>
        <div>
          <h2>Examples</h2>
          <ul>
            <li>
              <a href="https://redux.js.org/basics/usagewithreact" target="_blank">Basic Redux with React</a>
            </li>
            <li>
              <a href="https://redux.js.org/advanced" target="_blank">Advanced Redux with React</a>
            </li>
            <li>
              <a href="https://github.com/reduxjs/redux/tree/master/examples" target="_blank">Redux examples</a>
            </li>
            <li>
              <a href="https://github.com/reduxjs/redux/tree/master/examples" target="_blank">Redux examples</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app-root'));
