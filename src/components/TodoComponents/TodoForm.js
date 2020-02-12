import React from 'react'; 


const ToDoForm = props => {
        return(
     
       <form onSubmit={props.handleSubmit}>
           
               <input type="text" value={props.newTask} name="todoItem" onChange={props.handleChanges}/>
                <button type="submit">Add</button>
                <button type="reset">Clear input field</button>
           </form> 
        )
    };

export default ToDoForm;