import { createStore } from "solid-js/store";

import TodoItem from '../todo-item'

const Todo = () => {
const [todos, setTodo] = createStore([])

  const handleOnAddClick = () => {

  }

  return (
    <>
    <TodoItem onSave={handleOnAddClick} />
    {
      todos.map(({name, checked}) => {
      <TodoItem name={name} checked={checked} />
      })
    }
  </>
  )
}

export default Todo