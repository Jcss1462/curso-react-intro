function TodoItem({text,completed}) {
    return (
        <li>
            <span>V</span>
            <p>{text}</p>
            <span>x</span>
        </li>
    );
}

export { TodoItem };
