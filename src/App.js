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

function useLocalStorage(itemName, initialValue){

  const localStorageItem= localStorage.getItem(itemName);
  let parseItem;

  if(!localStorageItem){
    localStorage.setItem(itemName,initialValue);
    parseItem=initialValue;
  }else{
    parseItem=JSON.parse(localStorageItem);
  }

  const [item, setItem] =React.useState(parseItem);

  const saveItem=(newItem)=>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item,saveItem]
}

function App() {

 

  
  const [toDos, saveItem] = useLocalStorage("TODOS_V1",[]);
  
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = toDos.filter((prev) => prev.completed === true).length;
  const totalTodos = toDos.length;

  
  const competeTodo = (index) => {
    const newTodo = [...toDos];
    newTodo[index].completed = !newTodo[index].completed;
    saveItem(newTodo)

  }

  const deletTodo = (index) => {
    saveItem(toDos.filter((elem, idx) => {
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

