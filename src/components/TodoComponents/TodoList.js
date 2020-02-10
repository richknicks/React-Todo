// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
   
    return (
      <div className="todo-list">
        {props.myList.map(item => (
          <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
        <button className="clear-btn" onClick={props.clearPurchased}>
          Clear Purchased
        </button>
      </div>
    );
  };
  
  export default TodoList;
