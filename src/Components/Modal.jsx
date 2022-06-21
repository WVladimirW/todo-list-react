import React, { useEffect, useState, useRef } from "react";
import styles from "./Modal.module.css"

function Modal(props) {
   const textInput = useRef(null)

   useEffect(() => {
      textInput.current.focus()
   })

   const [todo, setTodo] = useState('')

   const changeHandler = (e) => {
      setTodo(e.target.value)
   }
   const addNewTodo = (e) => {
      props.addNewTodo(todo)
      setTodo('')
      props.setIsVisibleModal(false)
   }

   const addNewTodoEnter = (e) => {
      if (e.key === 'Enter') {
         addNewTodo()
      }
   }

   return (
      <div className={props.isVisibleModal ? styles.main : `${styles.main}, ${styles.hide}`}>
         <div className="card light-blue darken-4">
            <div className="card-content white-text">
               <span className="card-title">Add Todo:</span>
               <input
                  className="white-text"
                  placeholder="Add some todo..."

                  value={todo}
                  ref={textInput}
                  onChange={(e) => changeHandler(e)}
                  onKeyDown={(e) => addNewTodoEnter(e)} />
            </div>
            <div className="card-action">
               <a className="waves-effect green darken-2 btn-small"
                  onClick={addNewTodo}>Add todo</a>
               <a className={`waves-effect  deep-orange darken-4 btn-small ${styles.ml5}`}
                  onClick={() => props.setIsVisibleModal(false)}>Cancel</a>
            </div>
         </div>
      </div >
   )
}

export default Modal