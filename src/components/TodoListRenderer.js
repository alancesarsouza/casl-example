import React from 'react';
import TodoItem from './TodoItem';

const TodoListRenderer = ({ items, ...todoProps }) => {
  if (!items.length) {
    return '';
  }

  return (
    <section>
      <ul>
        {items.map(todo => (
          <TodoItem
            key={`TODO_${todo.title}_${todo.id}`}
            {...todoProps}
            todo={todo}
            key={todo.id}
          />)
        )}
      </ul>
    </section>
  )
}
export default TodoListRenderer;
