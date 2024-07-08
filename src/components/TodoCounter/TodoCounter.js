import React from "react";
import { TodoContext } from "../../shared/contexts/TodoContext";

function TodoCounter() {

    const {completedTodos:completed,totalTodos:total}= React.useContext(TodoContext);

    return (
        <h1>Haz Completado {completed} de {total} Todos</h1>
    );
}

export  {TodoCounter};
