import React from 'react';
import { useLocalStorage } from '../shared/hooks/useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos=[
//   { text: "cortar cebolla", completed: true },
//   { text: "Hacer curso de react", completed: false }
// ]
// localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");

function App() {

  const {
    item:toDos, 
    saveItem,
    loading,
    error
  } = useLocalStorage("TODOS_V1",[]);


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

  return <AppUI 
  completedTodos={completedTodos}
  totalTodos={totalTodos}
  searchValue={searchValue}
  setSearchValue={setSearchValue}
  toDos={toDos}
  competeTodo={competeTodo}
  deletTodo={deletTodo}
  loading={loading}
  error={error}/>
  
}





export { App };

