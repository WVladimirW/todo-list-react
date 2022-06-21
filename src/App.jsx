import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TodosList from './Components/TodosList';
import Modal from './Components/Modal';
import EditModal from './Components/EditModal';

function App() {
  const [todos, setTodos] = useState(() => localStorage.todos ? JSON.parse(localStorage.todos) : [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])

  const [isVisibleMokeTodos, setIsVisibleMokeTodos] = useState(false)

  const setVisibleMokeTodos = () => {
    setIsVisibleMokeTodos(true)
  }

  const [showTodos, setShowTodos] = useState('SHOW ALL') // SHOW COMPLETED, SHOW UNCOMPLETED, SHOW ALL

  const changeShowTodos = (e) => {
    setShowTodos(e.target.innerText)
  }

  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [isVisibleEditModal, setIsVisibleEditModal] = useState(false)

  const addShowModal = (e) => {
    setIsVisibleModal(true)
  }

  const addNewTodo = (title) => {
    const newTodo = {
      "userId": 1,
      "id": Date.now(),
      "title": title,
      "completed": false
    }
    setTodos([...todos, newTodo])
  }

  const [editTodos, setEditTodos] = useState({})

  const editTodo = (e, todoId) => {
    e.stopPropagation()
    todos.map((todo) => {
      if (todo.id === todoId) {
        setEditTodos(todo)
      }
    })
    setIsVisibleEditModal(true)
  }

  useEffect(() => {
    if (editTodos.id) {
      setTodos(todos.map((todo) => {
        if (todo.id === editTodos.id) {
          todo.title = editTodos.title
        }
        return todo
      }))
    }
  }, [editTodos.title])



  return (
    <div className='div-wrapped'>
      <Navbar
        setVisibleMokeTodos={setVisibleMokeTodos}
        changeShowTodos={changeShowTodos}
        addShowModal={addShowModal} />
      <TodosList
        visibleMokeTodos={isVisibleMokeTodos}
        showTodos={showTodos}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
      />
      <Footer />
      <Modal
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        addNewTodo={addNewTodo} />
      <EditModal
        isVisibleEditModal={isVisibleEditModal}
        setIsVisibleEditModal={setIsVisibleEditModal}
        editTodos={editTodos}
        setEditTodos={setEditTodos} />
    </div>
  );
}

export default App;



// При клике за пределами модального окна все отключить
// Затемнить фон при всплытии модального окна
// Сделать модальное окно Об авторе
