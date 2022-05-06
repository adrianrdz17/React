// React +18 
import React from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import CounterApp from "./CounterApp";
import PrimeraApp from "./PrimeraApp";

const divRoot = document.querySelector('#root');
const root = createRoot( divRoot );

root.render(<PrimeraApp saludo="Hola, Gustavo"/>)

// root.render( <CounterApp value={10}/>)
