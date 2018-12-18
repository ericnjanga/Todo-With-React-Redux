import { connect } from 'react-redux'
import { toggleTodo } from './../actions'
import TodoList from './../components/TodoList'
import getVisibleTodos from './../helpers/getVisibleTodos'

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
 
export default VisibleTodoList
