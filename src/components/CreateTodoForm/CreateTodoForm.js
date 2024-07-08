import "./CreateTodoForm.css"
import React from "react";
import { TodoContext } from "../../shared/contexts/TodoContext";

function CreateTodoForm() {

    const { setOpenModal,addTodo} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState("");

    function saveTodo(event){
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
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
                            required
                            placeholder="Escribe nuevo Todo" 
                            value={newTodoValue}
                            onChange={(event)=>{setNewTodoValue(event.target.value)}}/>

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
