import ReactDOM from 'react-dom/client';
// import FormWithCustomHook from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { MemoHook } from './06-memos/MemoHook';
// import { Memorize } from './06-memos/Memorize';
// import { Padre } from './07-tarea-memo/Padre';
// import './index.css';
// import './08-useReducer/intro-reducer.js';
import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <TodoApp />
    // </React.StrictMode>
);
