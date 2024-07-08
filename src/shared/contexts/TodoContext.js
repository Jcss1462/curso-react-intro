import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {


    const {
        item: toDos,
        saveItem,
        loading,
        error
    } = useLocalStorage("TODOS_V1", []);


    const [searchValue, setSearchValue] = React.useState("");
    const completedTodos = toDos.filter((prev) => prev.completed === true).length;
    const totalTodos = toDos.length;
    
    const [openModal, setOpenModal] = React.useState(false);

    console.log(openModal);


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
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            toDos,
            competeTodo,
            deletTodo,
            loading,
            error,
            openModal, 
            setOpenModal
        }} >
            {children}
        </ TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider }