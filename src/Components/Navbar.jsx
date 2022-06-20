import React, { useEffect } from "react";

function Navbar(props) {

   const showMokeTodos = () => {
      props.setVisibleMokeTodos(true)
   }

   return (
      <nav className="nav-extended   light-blue darken-1">
         <div className="nav-content">
            <ul className="right hide-on-med-and-down">
               <li><a onClick={showMokeTodos}>SHOW MOKE TODOS</a></li>
               <li><a onClick={(e) => props.changeShowTodos(e)}>SHOW ALL</a></li>
               <li><a onClick={(e) => props.changeShowTodos(e)}>SHOW COMPLETED</a></li>
               <li><a onClick={(e) => props.changeShowTodos(e)}>SHOW UNCOMPLETED</a></li>
            </ul>
            <span className="nav-title">Todos List</span>
            <a className="btn-floating btn-large halfway-fab waves-effect waves-light green darken-2">
               <i className="Large material-icons"
                  onClick={() => props.addShowModal()}>add</i>
            </a>
         </div>
      </nav>
   )
}

export default Navbar