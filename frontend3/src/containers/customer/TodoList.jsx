import React from 'react'

const TodoList = (props) => {
      return (
        <ul>
          {props.items.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }

  export default TodoList;