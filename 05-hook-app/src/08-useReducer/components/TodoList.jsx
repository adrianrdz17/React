import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], onToogleTodo, onDeleteTodo }) => {
    return (
        <ul className='list-group'>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onToogleTodo={(id) => onToogleTodo(id)}
                />
            ))}
        </ul>
    );
};
