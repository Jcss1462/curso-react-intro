import './App.css';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { PopUpComplete } from '../components/PopUpComplete/PopUpComplete';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    toDos,
    competeTodo,
    deletTodo
    }) {

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

export { AppUI }