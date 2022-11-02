import { createStore } from "solid-js/store";

import TodoItem from '../todo-item'

const Todo = () => {
const [todoStore, setTodo] = createStore([])
  const handleOnAddClick = ({name, checked}) => {
    setTodo(todos => [...todos, {name, checked, id: todoStore.length +1}])
  }

  const handleRemove = id => setTodo(
    todos => todos.filter(({id: todoId}) => todoId !== id)
  )

  return (
    <>
    <TodoItem onSave={handleOnAddClick}  />
   <For each={todoStore}>
      {props => 
        <TodoItem 
        name={props.name} 
        checked={props.checked} 
        onRemove={handleRemove}
        />
      }
    </For>
    
  </>
  )
}

export default Todo