import React from "react";
import { TodoContext } from "../../shared/contexts/TodoContext";

function CreateTodoButton() {

    const {setOpenModal}= React.useContext(TodoContext);

    return (
        <div id="buttonContainer">
            <button id="createTodoButton" onClick={()=>{
                setOpenModal(true);
            }}><b>Create</b></button>
        </div>
    );
}

export { CreateTodoButton };
