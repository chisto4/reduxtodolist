import React from 'react';
import { connect } from "react-redux";
import {deleteHandler, completeHandler} from "../action/Actions"


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

const mapDispatchToProps = {
  deleteHandler,
  completeHandler,
};

export default connect(null, mapDispatchToProps)(Todo);
