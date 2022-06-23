import React, { useEffect, useState } from "react";
import axios from 'axios'
import TodoItem from "./TodoItem";

function TodosList(props) {
   const { todos, setTodos } = props


   const [filteredTodos, setFilteredTodos] = useState(todos)

   useEffect(() => {
      switch (props.showTodos) {
         case 'COMPLETED':
            setFilteredTodos(todos.filter((todo) => todo.completed === true))
            break;
         case 'UNCOMPLETED':
            setFilteredTodos(todos.filter((todo) => todo.completed !== true))
            break;
         default:
            setFilteredTodos(todos.map((todo) => todo))
            break;
      }
   }, [props.showTodos, todos])

   const changeIsCompleted = (id) => {
      setTodos(todos.map((todo) => {
         if (todo.id === id) {
            todo.completed = !todo.completed
         }
         return todo
      }))
   }

   const deleteTodo = (event, id) => {
      event.stopPropagation()
      setTodos(todos.filter((todo) => todo.id !== id))
   }

   useEffect(() => {
      if (props.visibleMokeTodos) {
         let promise = axios.get('https://jsonplaceholder.typicode.com/todos/')
         promise.then((response) => {
            setTodos(response.data)
         })
      }
   }, [props.visibleMokeTodos])

   return (
      <div className='main'>
         {filteredTodos.map((todo) => {
            return <TodoItem
               todo={todo}
               key={todo.id}
               changeCompleted={changeIsCompleted}
               deleteTodo={deleteTodo}
               editTodo={props.editTodo} />
         })
         }
      </div>
   )
}

export default TodosList