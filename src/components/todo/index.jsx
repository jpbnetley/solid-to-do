import { createStore } from "solid-js/store";
import { For } from "solid-js";

import TodoItem from '../todo-item'

const Todo = () => {
const [todos, setTodo] = createStore([])

  const handleOnAddClick = ({name, checked}) => {
    console.log('clciked', name, checked)
    setTodo([...todos, {name, checked}])
  }

  return (
    <>
    <TodoItem onSave={handleOnAddClick} />
   <For each={todos}>
      {({name, checked}) => {
      <TodoItem name={name} checked={checked} />
      }}
      </For>
    
  </>
  )
}

export default Todo