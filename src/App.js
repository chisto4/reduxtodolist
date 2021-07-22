
import React from 'react';
import './App.css';

//Import components
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

class App extends React.Component {

  render() {
    return (
      < main>
        <Header/>
        <Form  
            // onCreateItem={this.CreateTodo}
            // filterArray={this.setFilteredTodos}
          />
        <TodoList   
            // todosArr={this.state.todosArr}
            // deleteHandler={this.deleteHandler}
            // filterValue={this.state.filterValue}
            // completeHandler={this.completeHandler}
          />
          <Footer
            // countArray={countArray}
            // clearAll={this.clearAll}
            // todosArr={this.state.todosArr}
            // setAllArrayElement={this.setAllArrayElement}
          />
      </main>

   )
  }
}


export default App;
