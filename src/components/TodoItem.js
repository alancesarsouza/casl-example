import React, { useState, useEffect } from 'react';
import Can from './Can';

const TodoItem = ({ editInput,
  mayUpdateTodo,
  todo,
  onRemove,
  onEdited,
  onComplete,
}) => {
  const [isEditing, setISEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState('')
  const cancelEdit = () => {
    setISEditing(false)
  }
  const removeTodo = () => {
    onRemove(todo)
  }

  useEffect(() => {
    setEditedTitle(todo.title)
  }, [])

  const doneEdit = () => {
    if (!isEditing) {
      return
    }

    if (!editInput.current.value) {
      removeTodo()
    } else {
      onEdited({ ...todo, title: editInput.current.value })
    }

    cancelEdit()
  }

  const doneOrCancelEdit = (event) => {
    if (event.keyCode === 13) {
      doneEdit()
    } else if (event.keyCode === 27) {
      cancelEdit()
    }
  }

  const editTodo = () => {
    if (!mayUpdateTodo.current.allowed) {
      return
    }

    setISEditing(false)
    editInput.current.focus()
  }

  const updateTitle = (event) => {
    setEditedTitle(event.target.value)
  }

  const completeTodo = (event) => {
    onComplete(todo, event.target.checked)
  }

  return (
    <li >
      <div >
        <Can
          do="update"
          on={todo}
          ref={mayUpdateTodo}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={completeTodo}
          />

        </Can>

        <label
          onDoubleClick={editTodo}>
          {todo.title}
        </label>

        <Can
          do="delete"
          on={todo}
        >
          <button
            onClick={removeTodo}
          >
            Delete
          </button>

        </Can>

      </div>

      <Can
        do="update"
        on={todo}>
        <input
          type="text"
          ref={editInput}
          value={editedTitle || todo.title}
          onBlur={doneEdit}
          onKeyUp={doneOrCancelEdit}
          onChange={updateTitle} />
      </Can>
    </li>
  )
}

export default TodoItem
