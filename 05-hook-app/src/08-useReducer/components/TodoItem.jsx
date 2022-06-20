export const TodoItem = ({ todo, onToogleTodo, onDeleteTodo }) => {
    return (
        <li
            key={todo.id}
            className='list-group-item d-flex justify-content-between'
        >
            <span
                onDoubleClick={() => onToogleTodo(todo.id)}
                className={`align-self-center ${
                    todo.done ? 'text-decoration-line-through' : ''
                }`}
            >
                {todo.description}
            </span>
            <button
                className='btn btn-warning'
                onClick={() => onDeleteTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};
