import React from "react";
export default function Todotable(props){

    return(
<div>
    <table>
        <tbody>
          {
            props.todos.map((todo, index) => 
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
              </tr>)
          }
        </tbody>
    </table>
</div>
    )
    
}
