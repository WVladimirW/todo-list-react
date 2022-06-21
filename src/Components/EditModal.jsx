import React, { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css"

function Modal(props) {
   const ref = useRef(null)

   useEffect(() => {
      ref.current.title = props.editTodos.title
      ref.current.focus()
      ref.current.selectionStart = ref.current.value.length
   }, [props.isVisibleEditModal])

   const editTodo = () => {
      props.setEditTodos({ ...props.editTodos, title: ref.current.value })
      props.setIsVisibleEditModal(false)
   }

   const editTodoEnter = (e) => {
      if (e.key === 'Enter') {
         editTodo()
      }
   }

   return (
      <div className={props.isVisibleEditModal ? styles.main : `${styles.main}, ${styles.hide}`}>
         <div className="card light-blue darken-4">
            <div className="card-content white-text">
               <span className="card-title">Edit todo:</span>
               <input
                  className="white-text"
                  ref={ref}
                  defaultValue={props.editTodos.title}
                  onKeyDown={(e) => editTodoEnter(e)} />
            </div>
            <div className="card-action">
               <a className="waves-effect green darken-2 btn-small"
                  onClick={editTodo}>Edit todo</a>
               <a className={`waves-effect  deep-orange darken-4 btn-small ${styles.ml5}`}
                  onClick={() => props.setIsVisibleEditModal(false)}>Cancel</a>
            </div>
         </div>
      </div >
   )
}

export default Modal