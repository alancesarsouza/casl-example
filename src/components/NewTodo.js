import React, { useState } from 'react';

const NewTodo = ({ onNewTodo }) => {
  const [title, setTitle] = useState('')
  const [assignee, setAssinge] = useState('')

  const updateTodoTitle = (event) => {
    setTitle(event.target.value)
  }

  const updateTodoAssignee = (event) => {
    setAssinge(event.target.value)
  }

  const addTodo = (event) => {
    if (event.keyCode !== 13) {
      return
    }

    onNewTodo({ title, assignee })
    setTitle('')
    setAssinge('')
  }

  return (
    <div className="new-todo">
      <input
        name="title"
        autoFocus
        autoComplete="off"
        placeholder="What needs to be done?"
        value={title}
        onInput={updateTodoTitle.bind(this)}
        onKeyUp={addTodo} />

      <select
        name="assignee"
        value={assignee}
        onChange={updateTodoAssignee}
      >
        <option
          value=""
          disabled
        >
          Choose Assignee
            </option>
        <option>me</option>
        <option>John Doe</option>
        <option>Alex Pupkin</option>
      </select>
    </div>
  );
}
export default NewTodo
