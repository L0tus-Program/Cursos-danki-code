import React, { useState } from 'react';
import './modal.css'
import Cli from './Cli';
import DB from './buttonDB';
import DesabilitaCliente from './desabilita_cliente';
import AllTrue from "./AllTrue";
import AllFalse from "./AllFalse";
import Log from './buttonLog';
function Modal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Opções de teste</h2>
            <div className='testes'> 
            
            <Cli />
            <Log />
            <DB />
            <DesabilitaCliente/>
            <AllTrue />
            <AllFalse />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
