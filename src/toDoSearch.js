import React from "react";
import './toDoSearch.css'
function ToDoSearch() {
   const valuechange=(ele)=>{
      console.log(ele.target.value)
   };

   return (
     
      <input placeholder='buscar tareas' 
         onChange={valuechange}
      />   )
}

export {ToDoSearch}