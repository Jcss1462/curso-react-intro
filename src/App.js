import logo from './platzi.webp';
import './App.css';
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

function App() {
  return (
    <div className="App">
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>

      <TodoList>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </TodoList>

      <CreateTodoButton></CreateTodoButton>
      
    </div>
  );
}



export  {App};

