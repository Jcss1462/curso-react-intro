import "./CreateTodoForm.css"
import React from "react";
import { TodoContext } from "../../shared/contexts/TodoContext";

function CreateTodoForm() {

    const { setOpenModal} = React.useContext(TodoContext);

    function saveTodo(event){
        event.preventDefault();
        //saveItem({ text: "cortar cebolla", completed: true });
    }

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <button className="close-btn" id="closeModalBtn" onClick={() => { setOpenModal(false) }}>&times;</button>
                <div id="formContainer">
                    <form onSubmit={(event)=>{
                        saveTodo(event);

                    }}>
                        <label><b>Escribe tu nuevo TODO</b></label>
                     
                        <textarea
                            placeholder="Escribe nuevo Todo" />

                        <button  trype="submit" className="guardarTodoButton">
                            <b>Guardar</b>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { CreateTodoForm };
