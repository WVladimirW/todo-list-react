import React, { useState } from "react";
import styles from "./Modal.module.css"

function Modal(props) {
   const [todo, setTodo] = useState('')

   const changeHandler = (e) => {
      setTodo(e.target.value)
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
                  onChange={(e) => changeHandler(e)} />
            </div>
            <div className="card-action">
               <a className="waves-effect green darken-2 btn-small">Add todo</a>
               <a className={`waves-effect  deep-orange darken-4 btn-small ${styles.ml5}`}>Cancel</a>
            </div>
         </div>
      </div >
   )
}

export default Modal