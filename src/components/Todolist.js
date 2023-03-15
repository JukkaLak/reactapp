import React, { useState } from 'react';
import Todotable from './Todotable';

 function Todolist() {
  const [todo, setTodo] = useState({
    description: '',
    date: ''
  });
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos([todo, ...todos]);
    setTodo({description: 'Description', date: 'Date'});
  }

  const handleDeleteTodo = () => {

  }


  

  return(
    <div>
      <h1>My Todos</h1>
     <p>Description</p> 
      <input
      
        placeholder='Description'
        value={todo.description}
        onChange={e => setTodo({...todo, description: e.target.value})}
      />
      <p>Date</p>
      <input
        type="date"
        value={todo.date}
        onChange={e => setTodo({...todo, date: e.target.value})}
      />
      <button onClick={handleAddTodo}>Add</button>
      
      <Todotable todos={todos}/>
    </div>
  );
}

export default Todolist;