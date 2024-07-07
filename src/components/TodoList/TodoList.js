function TodoList(props) {
    return (
        <div id="listContainer">
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export { TodoList };
