import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import Home from "./components/Home";
import { ContextProvider } from "./context/context";
import { Button } from 'primereact/button';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);