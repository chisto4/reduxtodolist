
import React from 'react';
import './App.css';

//Import components
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(props) {super(props);
    this.CreateTodo = this.CreateTodo.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.completeHandler = this.completeHandler.bind(this);
    this.setFilteredTodos = this.setFilteredTodos.bind(this);
    this.setAllArrayElement = this.setAllArrayElement.bind(this);
    this.clearAll = this.clearAll.bind(this);


    this.state = {
      todosArr: [
        {completed: false, text: 'Test Hello', id: 1}
      ],
      filterValue: "all"
    };
  }
  CreateTodo(inputText){
      let myTodos = [...this.state.todosArr];
      myTodos.push({text: inputText, completed: false, id: Math.random()*10});
      this.setState({todosArr: myTodos});
      console.log("zalupa", myTodos );
  }

  setFilteredTodos (value) {
    this.setState({filterValue: value});
    }

  deleteHandler(id) {
    let myTodos = this.state.todosArr;
    myTodos = myTodos.filter((el) => el.id !== id);
    this.setState({todosArr: myTodos});
   }
   
 completeHandler(id) {
  let myTodos = this.state.todosArr;
  myTodos = myTodos.map((item) => {
     if(item.id === id){
       return{
         ...item, 
         completed: !item.completed,
       };
     }
     return item;
   })
   this.setState({todosArr: myTodos});
 }

 setAllArrayElement() {
  let myTodos = this.state.todosArr;  
  if(myTodos.some(elem => !elem.completed)) {
    myTodos = myTodos.map((item) => {
      return{
        ...item,
      completed: true
      }
    })
    this.setState({todosArr: myTodos});
  } else {
    myTodos = myTodos.map((item) => {
      return{
        ...item,
        completed: false
      }
    })
  }
  this.setState({todosArr: myTodos});
}

    //clear All fuction
    clearAll () {
      let filArr = this.state.todosArr;
      filArr = filArr.filter(todo => todo.completed === false)
      this.setState({todosArr: filArr});
          }


  render() {
    const countArray = this.state.todosArr.length;
    return (
      < main>
     <Header/>
     <Form  onCreateItem={this.CreateTodo}
            filterArray={this.setFilteredTodos}/>
     <TodoList   todosArr={this.state.todosArr}
       filterValue={this.state.filterValue}
       deleteHandler={this.deleteHandler}
       completeHandler={this.completeHandler}
       />
      <Footer
      todosArr={this.state.todosArr}
      setAllArrayElement={this.setAllArrayElement}
      clearAll={this.clearAll}
      countArray={countArray}
      />
     </main>

   )
  }
}


export default App;
