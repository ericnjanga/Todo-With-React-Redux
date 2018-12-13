/**
 * Use rootReducer to create and export the store
 */
import { createStore } from 'redux'
import rootReducer from './../reducers'

export default createStore(rootReducer)
