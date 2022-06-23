import React, { useEffect } from "react";
import styles from "./Navbar.module.css"

function Navbar(props) {

   const showMokeTodos = () => {
      props.setVisibleMokeTodos(true)
   }

   return (
      <nav className={`nav-extended light-blue darken-1 ${styles.mb24}`}>
         <div className="nav-wrapper">
            <a className={`nav-title ${styles.padding} ${styles.ml15}`}>Todos List</a>
            <ul className="right">
               <li><a onClick={showMokeTodos}>DOWNLOAD TODOS</a></li>
            </ul>
         </div>
         <div className="nav-content">
            <ul className="tabs tabs-transparent">
               <li><a onClick={(e) => props.changeShowTodos(e)}>ALL</a></li>
               <li><a onClick={(e) => props.changeShowTodos(e)}>COMPLETED</a></li>
               <li><a onClick={(e) => props.changeShowTodos(e)}>UNCOMPLETED</a></li>
               <li><a onClick={() => props.setTodos([])}>CLEAR</a></li>
            </ul>
            <a className="btn-floating btn-large halfway-fab waves-effect waves-light green darken-2">
               <i className="Large material-icons"
                  onClick={() => props.addShowModal()}>add</i>
            </a>

         </div>
      </nav>
      // className="active"
      // <nav className="nav-extended   light-blue darken-1">
      //    <div className="nav-content">
      //       <ul className="right hide-on-med-and-down">
      //          <li><a onClick={showMokeTodos}>DOWNLOAD MOKE TODOS</a></li>
      //          <li><a onClick={(e) => props.changeShowTodos(e)}>SHOW ALL</a></li>
      //          <li><a onClick={(e) => props.changeShowTodos(e)}>SHOW COMPLETED</a></li>
      //          <li><a onClick={(e) => props.changeShowTodos(e)}>SHOW UNCOMPLETED</a></li>
      //       </ul>
      //       <span className="nav-title">Todos List</span>
      //       <a className="btn-floating btn-large halfway-fab waves-effect waves-light green darken-2">
      //          <i className="Large material-icons"
      //             onClick={() => props.addShowModal()}>add</i>
      //       </a>
      //    </div>
      // </nav>
   )
}

export default Navbar