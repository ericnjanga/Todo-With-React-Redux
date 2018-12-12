
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
 * Only returns (depending on the @action):
 * - An updated copy of the state's "todos" array (@stateTodosArray)
 * - Or the @stateTodosArray itself by default
 * @param {*} stateTodosArray todos array from the state
 * @param {*} action 
 */
const todos = (stateTodosArray = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...stateTodosArray,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return stateTodosArray.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )

    default:
      return state
  }
}


/**
 * Returns (depending on the @action):
 * - An updated version of the @state
 * - Or the @state itself by default
 * NOTE: uses "Reducer Composition" pattern with todos()
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
