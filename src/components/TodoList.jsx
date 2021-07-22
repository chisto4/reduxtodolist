import React from 'react';
import { connect } from "react-redux";
import {deleteHandler, completeHandler} from "../action/Actions"


import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
    let arr = [];
    if(this.props.filterValue === 'all'){
      arr = this.props.todosArr;
    } else if(this.props.filterValue === 'completed'){
      arr = this.props.todosArr.filter(todo => todo.completed === true);
    } else if(this.props.filterValue === 'uncompleted') {
      arr = this.props.todosArr.filter(todo => todo.completed === false);
    }
    return(
      <div className="todo-container">
        <ul className="todo-list">
          {arr.map((todo) => (
            <Todo 
              key={todo.id}
              todo={todo}
              text={todo.text} 
              deleteHandler={this.props.deleteHandler}
              completeHandler={this.props.completeHandler}
              />
          ))}
        </ul>
      </div>
    );
    }
}

function mapStateToProps(state) {
  const { todosArr } = state.Reductor;
  const { filterValue } = state.Reductor;
  return { todosArr, filterValue };
}

const mapDispatchToProps = {
  deleteHandler,
  completeHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
