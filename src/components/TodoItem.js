import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";


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
