import { CompleteIcon } from "./../TodoIcon/CompleteIcon";
import { DeleteIcon } from "./../TodoIcon/DeleteIcon";


function TodoItem({ text, completed, onComplete ,onDelete }) {

    return (
        <li>
            <CompleteIcon onComplete={onComplete} completed={completed}></CompleteIcon>
           
            <p className={`${completed && "--complete"}`}>{text}</p>
        
            <DeleteIcon onDelete={onDelete}></DeleteIcon>
        </li>
    );
}

export { TodoItem };
