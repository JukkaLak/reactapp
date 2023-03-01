import React, { useState } from 'react';

 function Todolist() {
  const [todo, setTodo] = useState({
    description: '',
    date: ''
  });
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos([todo, ...todos]);
    setTodo({description: '', date: ''});
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
      <table>
        <tbody>
          {
            todos.map((todo, index) => 
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;