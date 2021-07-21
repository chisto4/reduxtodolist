import React from 'react';

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

export default TodoList;