import React from "react";
import  './ToDoItem.css';
function ToDoItem(props){
   return(
      <li className='ul_container'>
         <span></span>
         <p className='task'>props.Text</p>
         <span></span>
      </li>
   )
};
export {ToDoItem};