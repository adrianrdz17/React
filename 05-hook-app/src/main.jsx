import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
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
import { MainApp } from './09-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <div className='container mt-4'>
        <BrowserRouter>
            <MainApp />
        </BrowserRouter>
    </div>
    // </React.StrictMode>
);
