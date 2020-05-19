import React, { useState, useEffect } from 'react';
import todoStorage from '../services/todo-storage';
import NewTodo from './NewTodo';
import TodoListRenderer from './TodoListRenderer';
import Can from './Can';

const TodoList = ({ forceUpdate }) => {
  const storage = todoStorage.fetch()
  const [items, setItems] = useState(Boolean(storage.length) ? storage : [])

  useEffect(() => {
    todoStorage.save(items)
  }, [items])

  const addTodo = (attrs) => {
    const todo = todoStorage.build(attrs)
    setItems(items.concat(todo))
  }

  const removeTodo = (todo) => {
    setItems(items.filter(item => item !== todo))
  }

  const editTodo = (todo) => {
    const items = items.slice(0)
    const index = items.findIndex(item => item.id === todo.id)

    setItems(items.splice(index, 1, todo))
  }

  const completeTodo = (todo, isCompleted) => {
    todo.completed = isCompleted
    forceUpdate()
  }
  console.log(items[0])
  return (
    <div>
      <header>
        <h1>Todos</h1>
        <Can do="create" on="Todo">
          <NewTodo onNewTodo={addTodo} />
        </Can>
      </header>
      <TodoListRenderer
        items={items}
        onRemove={removeTodo}
        onEdited={editTodo}
        onComplete={completeTodo}
      />
    </div>
  )
}
export default TodoList
