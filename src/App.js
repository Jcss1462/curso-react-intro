import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';
import { PopUpComplete } from './components/PopUpComplete';

// const defaultTodos=[
//   { text: "cortar cebolla", completed: true },
//   { text: "Hacer curso de react", completed: false }
// ]
// localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");


function App() {

  const localStorageTodos= localStorage.getItem("TODOS_V1");
  let parseTodos;

  if(!localStorageTodos){
    localStorage.setItem("TODOS_V1",[]);
    parseTodos=[];
  }else{
    parseTodos=JSON.parse(localStorageTodos);
  }

  
  const [toDos, setTodos] = React.useState(parseTodos);
  
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = toDos.filter((prev) => prev.completed === true).length;
  const totalTodos = toDos.length;

  const saveTodos=(newTodos)=>{
    localStorage.setItem("TODOS_V1",JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const competeTodo = (index) => {
    const newTodo = [...toDos];
    newTodo[index].completed = !newTodo[index].completed;
    saveTodos(newTodo)

  }

  const deletTodo = (index) => {
    saveTodos(toDos.filter((elem, idx) => {
      return index === idx ? "" : elem;
    }))
  }


  return (
    <div id="app">
      <TodoCounter completed={completedTodos} total={totalTodos}></TodoCounter>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></TodoSearch>

      <TodoList>
        {toDos.map((todo, index) =>
          todo.text.toLowerCase().includes(searchValue.toLowerCase()) ? (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => competeTodo(index)} onDelete={() => deletTodo(index)}></TodoItem>) : ""
        )}
      </TodoList>
      <CreateTodoButton></CreateTodoButton>
      
      <PopUpComplete completedTodos={completedTodos} totalTodos={totalTodos}></PopUpComplete>
    </div>
  );
}





export { App };

