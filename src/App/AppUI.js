import './App.css';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { PopUpComplete } from '../components/PopUpComplete/PopUpComplete';
import { TodosLoading } from '../components/TodosLoading/TodosLoading';
import { TodosError } from '../components/TodosError/TodosError';
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos';
import { TodoContext } from '../shared/contexts/TodoContext';
import React from 'react';
import { Modal } from '../components/Modal/Modal';
import { CreateTodoForm } from '../components/CreateTodoForm/CreateTodoForm';

function AppUI() {

    const { completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        toDos,
        competeTodo,
        deletTodo,
        loading,
        error,
        openModal } = React.useContext(TodoContext);

        

    return (
        <div id="app">

            <TodoCounter></TodoCounter>

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            ></TodoSearch>

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && totalTodos === 0) && <EmptyTodos />}
                {toDos.map((todo, index) =>
                    todo.text.toLowerCase().includes(searchValue.toLowerCase()) ? (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => competeTodo(index)} onDelete={() => deletTodo(index)}></TodoItem>) : ""
                )}
            </TodoList>
            <CreateTodoButton></CreateTodoButton>

            <PopUpComplete completedTodos={completedTodos} totalTodos={totalTodos} loading={loading}></PopUpComplete>

            {openModal && (
                <Modal>
                    <CreateTodoForm/>
                </Modal>
            )}

        </div>
    );

}

export { AppUI }