import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

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
      myTodoList: myList
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
    this.setState({
      myTodoList: [...this.state.myTodoList, newTask]
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
