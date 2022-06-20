import React, { useEffect, useRef, useState } from "react";

function TodoItem(props) {
   return (
      <div className="collection" onClick={() => props.changeCompleted(props.todo.id)}>
         <a href="#!" id={props.todo.id} className="collection-item">
            <span className="badge">
               <i className="Medium material-icons"
                  onClick={(event) => props.editTodo(event, props.todo.id)}>create</i>
               {props.todo.completed
                  ? <i className="Medium material-icons green-text">check</i>
                  : <i className="Medium material-icons">check_box_outline_blank</i>


               }
               <i className="material-icons red-text"
                  onClick={(event) => props.deleteTodo(event, props.todo.id)}>delete</i>
            </span>
            <span>{props.todo.id}. </span>
            {props.todo.title}
         </a>
      </div>
   )
}

export default TodoItem