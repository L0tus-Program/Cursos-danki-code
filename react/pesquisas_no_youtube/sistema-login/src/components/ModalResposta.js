import React, { useState, useEffect } from 'react';
import './modal.css';

function ModalResultado(props) {
  const [showModal, setShowModal] = useState(true);
  const [resultadoData, setResultadoData] = useState('');

  

  const closeModal = () => {
    setShowModal(false);
    
  };

  // Atualiza o conteúdo da div "resultado" quando os props.resultado mudam
  useEffect(() => {
    if (props.resultado) {
      const { token } = props.resultado;
      const [, payloadEncoded] = token.split('.');
      const payloadDecoded = atob(payloadEncoded);
      setResultadoData(payloadDecoded);
    }
  }, [props.resultado]);
  

  return (
    <div>
     
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Opções de teste</h2>
            <div className='resultado'>
              <div id='resultado'>{resultadoData}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalResultado;
