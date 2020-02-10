import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm'
import ToDoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css';
const myList =[
  {
    task:'',
    id:'Date.now()',
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      myTodoList: myList,
      newTask:''
    };
  }
  toggleItem = clickedItem => {
    const newTodoList = this.state.myTodoList.map(item => {
      if(item.id === clickedItem){
        return{
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      myTodoList: newTodoList
    });
  };
  addNewItem = taskText => {
    const newTask = {
      task: taskText,
      id: Date.now(),
      completed: false
    };
    console.log(newTask)
    this.setState({
      myTodoList: [...this.state.myTodoList, newTask]
    });
  };
  handleChanges = e => {
    this.setState({
      newTask: e.target.value
      
    });
  };

  
  handleSubmit = e => {
    e.preventDefault();
    this.addNewItem(this.state.newTask);
    this.setState({ newTask: '' });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addNewItems={this.addNewItems} handleChanges={this.handleChanges} handleSubmit={this.handleSubmit}/>
        <ToDoList toggleItem={this.toggleItem} myList={this.state.myTodoList}/>
      </div>
    );
  }
}

export default App;
