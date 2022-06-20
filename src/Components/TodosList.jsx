import React, { useEffect, useState } from "react";
import axios from 'axios'
import TodoItem from "./TodoItem";

function TodosList(props) {
   const [todos, setTodos] = useState([{
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
   },
   {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
   }])

   const [filteredTodos, setFilteredTodos] = useState(todos)

   useEffect(() => {
      switch (props.showTodos) {
         case 'SHOW COMPLETED':
            setFilteredTodos(todos.filter((todo) => todo.completed === true))
            break;
         case 'SHOW UNCOMPLETED':
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
   const editTodo = (event, id) => {
      event.stopPropagation()
      setTodos(todos.map((todo) => {
         if (todo.id === id) {
            todo.title = window.prompt('Изменить', todo.title) // изменить на красивое модальное окно
         }
         return todo
      }))
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
               editTodo={editTodo} />
         })
         }
      </div>
   )
}

export default TodosList