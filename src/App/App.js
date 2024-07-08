import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../shared/contexts/TodoContext';

// const defaultTodos=[
//   { text: "cortar cebolla", completed: true },
//   { text: "Hacer curso de react", completed: false }
// ]
// localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");

function App() {

  return <TodoProvider>
    <AppUI></AppUI>
  </TodoProvider>
}





export { App };

