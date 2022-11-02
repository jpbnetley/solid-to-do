const TodoItem = ({name='', checked, id, onSave, onRemove}) => {

  let textRef
  let checkboxRef

  const handleSaveClick = () => {
    const text = textRef.value
    const checked = checkboxRef.checked

    onSave({name: text, checked})
    textRef.value = ''
    checkboxRef.checked = false
  }

  const handleOnRemove = () => {
    onRemove(id)
  }

  return (
  <div>
    <input type='text' value={name} ref={textRef} />
    <input type="checkbox" checked={checked} ref={checkboxRef} />
    { onRemove && <button  type='button' onClick={handleOnRemove}>remove</button > }
    { onSave && <button type='button' onClick={handleSaveClick}>save</button > }
  </div>
  )
}

export default TodoItem