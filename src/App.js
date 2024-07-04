import logo from './platzi.webp';
import './App.css';
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';

function App() {

  const defaultTodos =[
    {text: "cortar cebolla", completed:true},
    {text: "Hacer curso de react", completed:false}
  ]

  return (
    <div id="app">
      <TodoCounter  completed = {5} total={10}></TodoCounter>
      <TodoSearch ></TodoSearch>

      <TodoList>
        {defaultTodos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed}></TodoItem>))}
      </TodoList>

      <CreateTodoButton></CreateTodoButton>
      
    </div>
  );
}



export  {App};

