import React from 'react';

import style from './../styles/StyledApp'
import Footer from './Footer'
import AddTodo from './../containers/AddTodo'
import VisibleTodoList from './../containers/VisibleTodoList'
import './../../node_modules/normalize.css/normalize.css'


const App = () => {

  const { AppContainer } = style;

  return (
    <AppContainer>
      <h1>Todo</h1>
      <AddTodo />
      <VisibleTodoList />
      <Footer />

      <div className="lexic">
        <h2>Reflections on React-Redux</h2>
        <div>
          <ol>
            <li>The entire application doesn't connect to the redux-store. Only components <code>(containers)</code> which to fetch from or dispatch to the store connect.</li>
          </ol>
        </div>


        <h2>Thoughts</h2>
        <div>
          <h3>Why using Redux?</h3>
          <ul>
            <li>different parts of the code can’t change the state arbitrarily, causing hard-to-reproduce bugs.</li>
            <li>Gives a better understanding of what's going on in the app (Changes are only made through actions). If something changed, we know why it changed (bye bye voodoo code)</li>
          </ul>
        </div>


        <div>
          <h2><a href="https://redux.js.org/basics/data-flow" target="_blank">Data Flow</a></h2>
          <p>Redux architecture revolves around a strict unidirectional data flow.</p>
          <p>This means that all data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand. It also encourages data normalization, so that you don't end up with multiple, independent copies of the same data that are unaware of one another.</p>

          <h3>The data lifecycle in any Redux app follows these 4 steps:</h3>
          <dl>
            <dt>You call <code>store.dispatch(action)</code> from anywhere in your app, including components and XHR callbacks, or even at scheduled intervals.</dt>
            <dt style={{color:'red!important'}}>
              The Redux store calls the reducer function you gave it.
            </dt>
            <dd style={{color:'red!important'}}>The store will pass two arguments to the reducer: the current state tree and the action.</dd>
            <dt style={{color:'orange!important'}}>The root reducer may combine the output of multiple reducers into a single state tree.</dt>
            <dd style={{color:'orange!important'}}>How you structure the root reducer is completely up to you. Redux ships with a 
                  <a href="https://redux.js.org/api/combinereducers" target="_blank">combineReducers()</a> helper function, useful for “splitting” the root reducer into separate functions that each manage one branch of the state tree.
            </dd>
            <dt>The Redux store saves the complete state tree returned by the root reducer.</dt>
            <dd>
              This new tree is now the next state of your app! Every listener registered with store.subscribe(listener) will now be invoked; listeners may call store.getState() to get the current state.
              Now, the UI can be updated to reflect the new state. If you use bindings like <a href="https://github.com/gaearon/react-redux" target="_blank">React Redux</a>, this is the point at which component.setState(newState) is called.
            </dd>
          </dl>
        </div>
        <div>
          <h3>Container component</h3>
          <p>React component that uses <code>store.subscribe()</code> to read a part of the Redux state tree and supply props to a presentational component it renders.</p>
          <p>They're the ones hooking up presentational containers with Redux.</p>
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
          <p><code>connect()</code> optimize the code and prevent unnecessary re-renders.</p>
        </div>
        <div>
          <h2>Interraction with Redux</h2>
          <h3>Reading from Redux store</h3>
          <p>You can define a spacial function <code>mapStateToProps</code> which describes how to transform the current Redux store state into the props you want to pass to a presentational component.</p>
          <h3>Dispatching to Redux store</h3>
          <p>You can define a spacial function <code>mapDispatchToProps</code> which receives a <code>dispatch()</code> method and returns callback props that you want to inject into the presentational component.</p>
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
        <div>
          <h2>Fundamental Patterns</h2>
          <h2>Reducer Composition</h2>
          <p>One reducer passes a portion of the state to another reducer only knows how to update that specific portion.</p>
        </div>


        <div>
          <h2>Good Read</h2>
          <ul>
            <li><a href="https://redux.js.org/recipes/reducingboilerplate" target="_blank">Reducing Boilerplate</a></li>
            <li><a href="https://github.com/redux-utilities/flux-standard-action" target="_blank">Flux Standard Action (how actions could be constructed)</a></li>
          </ul>
        </div>
      </div>
    </AppContainer>
  );
};

export default App