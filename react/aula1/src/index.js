import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App texto="Isso é um PROPS" />
    <App texto="Isso é outro PROPS, reaproveitando o mesmo componente" />
    <App texto={{ objeto: "Chamando aqui um objeto", objeto2: "Outro objeto aqui" }} />
  </React.StrictMode>
);


