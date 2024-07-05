function TodoItem({text,completed}) {
    return (
        <li>
            <span>V</span>
            <p className={`${completed && "--complete"}`}>{text}</p>
            <span>x</span>
        </li>
    );
}

export { TodoItem };
