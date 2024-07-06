function TodoItem({ text, completed, todos, setTodos, index }) {

    function completarTodo(){
        setTodos(todos.map((prev, idx) => {
            if (idx == index) {
                prev.completed = !prev.completed;
            }
            return prev;
        }))
    }

    function eliminarTodo(){
        setTodos(todos.filter((elem,idx) => {
            return index==idx?"":elem;
        }))
    }


    return (
        <li>
            <span onClick={completarTodo}>V</span>
            <p className={`${completed && "--complete"}`}>{text}</p>
            <span onClick={eliminarTodo}>x</span>
        </li>
    );
}

export { TodoItem };
