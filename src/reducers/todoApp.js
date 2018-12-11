
import { 
  ADD_TODO,
  TOGGLE_TODO,
  VisibilityFilters
} from './../actions'


const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}


/**
 * Perform calculations on @stateTodos array and returns a new array
 * @param {*} stateTodos todos array from the state
 * @param {*} action 
 */
const todos = (stateTodos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...stateTodos,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return stateTodos.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )

    default:
      return state
  }
}


/**
 * Perform calculations on the @state and returns a new state
 * @param {*} state 
 * @param {*} action 
 */
const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      }

    case ADD_TODO: 
    case TOGGLE_TODO:
      return {
        todos: todos(state.todos, action),
        visibilityFilter: action.filter
      }

    default:
      return state
  }
}


export default todoApp
