import './App.css';
import React from "react";
import { ToDoButton } from "./toDoButton"; 
import { ToDoItem } from "./toDoItem";
import { ToDoList } from  "./toDoList"
import { ToDoSearch } from "./toDoSearch";
import  {ToDoCounter}  from './toDoCounter';
const to_dos=[
  {Text:'holis',completed :false },
  {Text:'holis',completed :false },
  {Text:'holis',completed :false },
]

function App() {
  return (
    <>
    <ToDoCounter/>
    <ToDoSearch />

      <ToDoList >
        {to_dos.map(todo => (
          <ToDoItem
            key={todo.Text}
            text={todo.Text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>

      <ToDoButton />
    </>
  );
}

export default App;
