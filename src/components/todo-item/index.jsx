const TodoItem = ({name='', checked, onSave, onRemove}) => {

  return (
  <div>
    <input type='text' value={name}/>
    <input type="checkbox" checked={checked} />
    { onRemove && <button  type='button' onClick={onRemove}>remove</button > }
    { onSave && <button  put type='button' onClick={onSave}>save</button > }
  </div>
  )
}

export default TodoItem