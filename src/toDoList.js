import React from "react";

function ToDoList(params) {
 return(
   <ul>
      {params.children}
   </ul>   
 )  
}

export {ToDoList};