const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del alma',
        done: false,
    },
];

// La action le dice al reducer como modificara el estado
// Un reducer siempre debe de devolver un estado
const todoReducer = (state = initialState, action = {}) => {
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
