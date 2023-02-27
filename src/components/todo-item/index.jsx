import styles from './styles.module.css'

const TodoItem = ({name='', checked, id, onSave, onRemove}) => {

  let textRef
  let checkboxRef

  const handleSaveClick = () => {
    const text = textRef.value
    const checked = checkboxRef.checked

    onSave({name: text, checked})
    textRef.value = ''
    checkboxRef.checked = false
    textRef.focus()
  }

  const handleOnRemove = () => {
    onRemove(id)
  }

  return (
  <div class={styles.container}>
    <input type='text' value={name} ref={textRef} class={styles.input}/>
    <input type="checkbox" checked={checked} ref={checkboxRef} />
    
    { onRemove && (
    <button  type='button' onClick={handleOnRemove} class={styles.btnRemove}>
      remove
      </button >
      ) }
    
    { onSave && (
    <button type='button' onClick={handleSaveClick} class={styles.btnSave}>
      save
      </button >
    ) }
  </div>
  )
}

export default TodoItem