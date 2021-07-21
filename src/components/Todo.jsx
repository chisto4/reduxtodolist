import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.fnCompleteHandler = this.fnCompleteHandler.bind(this);
    this.fnDeleteHandler = this.fnDeleteHandler.bind(this)    
  }

  fnDeleteHandler(event) {
     this.props.deleteHandler(this.props.todo.id);
    }
    
  fnCompleteHandler() {
    this.props.completeHandler(this.props.todo.id);
  }
  render () {
    const {text} = this.props;
    const {todo} = this.props;
  return(
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
        <button onClick={this.fnCompleteHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button> 
        <button onClick={this.fnDeleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
  );  }
}

export default Todo;