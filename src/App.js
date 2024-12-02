import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import {Footer} from "./MyComponents/Footer"
import {AddTodo} from "./MyComponents/AddTodo"
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const addTodo = (title, desc) =>{
    console.log("I am adding this todo", title, desc);
    let sno = todos[todos.length-1].sno+1
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
   const [todos, setTodos] = useState([ 
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go the market for get this job done"
        
      },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "You need to go the gym for get this job done"
        
      },
     {
      sno: 3,
      title: "Go to the sleep",
      desc: "You need to go the sleep for get this job done"
        
      },
  ]);
  return (
<>
<Header title='MyTodos List' searchBar={false}/>
<AddTodo addTodo={addTodo}/>
<Todos todos={todos} onDelete={onDelete}/>
<Footer/>
</>
  );
}
export default App;
