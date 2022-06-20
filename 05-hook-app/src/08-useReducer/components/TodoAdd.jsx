import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.lenght <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        };

        onResetForm();

        onNewTodo(newTodo);
    };

    return (
        <form className='form-group' onSubmit={onFormSubmit}>
            <input
                type='text'
                name='description'
                value={description}
                placeholder='Que hay que hacer?'
                className='form-control'
                onChange={onInputChange}
            />

            <button
                type='submit'
                className='btn btn-outline-primary btn-block mt-2'
            >
                Agregar tarea
            </button>
        </form>
    );
};
