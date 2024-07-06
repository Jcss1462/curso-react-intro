import logo from './platzi.webp';
import './App.css';
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';

function App() {

  const [searchValue, setSearchValue]=React.useState("");
  const [toDos, setTodos]=React.useState([
    {text: "cortar cebolla", completed:true},
    {text: "Hacer curso de react", completed:false}
  ]);

  const completedTodos= toDos.filter((prev)=>prev.completed==true).length;
  const totalTodos= toDos.length;

  console.log(completedTodos);


  return (
    <div id="app">
      <TodoCounter  completed = {completedTodos} total={totalTodos}></TodoCounter>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></TodoSearch>

      <TodoList>
        {toDos.map((todo, index) =>
          todo.text.toLowerCase().includes(searchValue.toLowerCase())?(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} todos ={toDos} setTodos={setTodos} index={index}></TodoItem>):""
          )}
      </TodoList>

      <CreateTodoButton></CreateTodoButton>
      
    </div> 
  );
}



export  {App};

