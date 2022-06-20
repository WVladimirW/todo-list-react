import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TodosList from './Components/TodosList';
import Modal from './Components/Modal';

function App() {
  const [isVisibleMokeTodos, setIsVisibleMokeTodos] = useState(false)

  const setVisibleMokeTodos = () => {
    setIsVisibleMokeTodos(true)
  }

  const [showTodos, setShowTodos] = useState('SHOW ALL') // SHOW COMPLETED, SHOW UNCOMPLETED, SHOW ALL

  const changeShowTodos = (e) => {
    setShowTodos(e.target.innerText)
  }

  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const addShowModal = (e) => {
    setIsVisibleModal(true)
  }

  return (
    <div className='div-wrapped'>
      <Navbar
        setVisibleMokeTodos={setVisibleMokeTodos}
        changeShowTodos={changeShowTodos}
        addShowModal={addShowModal} />
      <TodosList
        visibleMokeTodos={isVisibleMokeTodos}
        showTodos={showTodos} />
      <Footer />
      <Modal isVisibleModal={isVisibleModal} />
    </div>
  );
}

export default App;



// Сделать модальное окно для добавления дела
// Сделать модальное окно Об авторе
// Сделать модальное окно для редактирования дела
// Сделать сохраненин в локалсторейдж
//
//
//
//
