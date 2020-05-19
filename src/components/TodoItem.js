import React, { Component } from 'react';
import Can from './Can';

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.editInput = React.createRef();
    this.mayUpdateTodo = React.createRef();
  }
  state = {
    isEditing: false,
    editedTitle: ''
  }

  componentDidMount() {
    this.editedTitle = this.props.todo.title
  }

  doneEdit() {
    if (!this.state.isEditing) {
      return
    }

    if (!this.editInput.current.value) {
      this.removeTodo()
    } else {
      this.props.onEdited({ ...this.props.todo, title: this.editInput.current.value })
    }

    this.cancelEdit()
  }

  cancelEdit() {
    this.setState({ isEditing: false })
  }

  doneOrCancelEdit(event) {
    if (event.keyCode === 13) {
      this.doneEdit()
    } else if (event.keyCode === 27) {
      this.cancelEdit()
    }
  }

  removeTodo() {
    this.props.onRemove(this.props.todo)
  }

  editTodo() {
    if (!this.mayUpdateTodo.current.allowed) {
      return
    }

    this.setState({
      isEditing: true,
    })
    this.editInput.current.focus()
  }

  updateTitle(event) {
    this.setState({ editedTitle: event.target.value })
  }

  completeTodo(event) {
    this.props.onComplete(this.props.todo, event.target.checked)
  }

  render() {
    return (
      <li >
        <div >
          <Can do="update" on={this.props.todo} ref={this.mayUpdateTodo}>
            <input type="checkbox" checked={this.props.todo.completed} onChange={this.completeTodo.bind(this)} />
          </Can>
          <label onDoubleClick={this.editTodo.bind(this)}>{this.props.todo.title}</label>
          <Can do="delete" on={this.props.todo}>
            <button onClick={this.removeTodo.bind(this)}>Delete</button>
          </Can>
        </div>
        <Can do="update" on={this.props.todo}>
          <input
            type="text"
            ref={this.editInput}
            value={this.state.editedTitle || this.props.todo.title}
            onBlur={this.doneEdit.bind(this)}
            onKeyUp={this.doneOrCancelEdit.bind(this)}
            onChange={this.updateTitle.bind(this)} />
        </Can>
      </li>
    )
  }
}
