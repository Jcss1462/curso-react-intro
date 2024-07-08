import "./CreateTodoForm.css"
import React from "react";
import { TodoContext } from "../../shared/contexts/TodoContext";

function CreateTodoForm() {

    const { setOpenModal } = React.useContext(TodoContext);

    return (
        <div id="myModal" class="modal">
            <div class="modal-content">
                <button class="close-btn" id="closeModalBtn" onClick={()=>{setOpenModal(false)}}>&times;</button>
                <h2>Modal Title</h2>
                <p>Some information goes here...</p>
            </div>
        </div>
    );
}

export { CreateTodoForm };
