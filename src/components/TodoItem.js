function TodoItem({ text, completed, onComplete ,onDelete }) {



    return (
        <li>
            <span onClick={onComplete}>V</span>
            <p className={`${completed && "--complete"}`}>{text}</p>
            <span onClick={onDelete}>x</span>
        </li>
    );
}

export { TodoItem };
