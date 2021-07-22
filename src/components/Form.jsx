import React from 'react';
import { connect } from "react-redux";
import {creatTodo, setFilteredTodos} from "../action/Actions"


class Form extends React.Component {
  constructor(props) {
  super(props);

    this.newTodo = this.newTodo.bind(this);
    this.inputTextHandler = this.inputTextHandler.bind(this);
    this.sumbitToDoHandler = this.sumbitToDoHandler.bind(this);
    this.statusHandler = this.statusHandler.bind(this);

  this.state = {
    inputText: "",
    value: "all",
  };
}
inputTextHandler(event) {
  this.setState({inputText: event.target.value});
}
newTodo(event) {
  if(event.keyCode === 13){
    this.sumbitToDoHandler(event);
    }
}
sumbitToDoHandler (event) {
  // event.componentDidMount();
  this.props.creatTodo(this.state.inputText)
  this.setState({inputText: ""});
  event.preventDefault();
};
statusHandler (event) {
  console.log('test', event);
  this.props.setFilteredTodos(event.target.value);
  console.log('mama:"', event.target.value)

  // this.setStatus(event.target.value);
  event.preventDefault();
};
    render() {
      return (
        <form>
        <input value={this.state.inputText} onChange={this.inputTextHandler} 
        type="text" className="todo-input" onKeyDown={this.newTodo}  />
        <div className="saveSelectWrapper">
        <button onClick={this.sumbitToDoHandler} className="todo-button" type="submit">
          <p>  SAVE </p>
          </button>
          <div className="select">
            <select onChange={this.statusHandler} name="todosArr" className="filter-todo">
              <option value="all">ALL</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Active</option>
            </select>
          </div>
        </div>  
      </form>

      )
    }
}

const mapDispatchToProps = {
  creatTodo,
  setFilteredTodos
};

export default connect(null, mapDispatchToProps)(Form);
