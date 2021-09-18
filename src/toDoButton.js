import React from "react";

function ToDoButton(){
   const onClick = ()=>{
alert('aqui se deberia abreir el modal')
   }
   
   return(
      <button 
      className="button"
       onClick={onClick}>
         +
      </button>
      //creacion de eventos todo lo que empieze por on nos va ayudar a recibir los eventos de nuestros usuarios.
      )
};

export { ToDoButton } ;