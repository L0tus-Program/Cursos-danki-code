import React from 'react';

function Log() {
  async function handleDownload() {
    try {
      let token;
      const apiUrl = 'http://62.72.63.140:5000/all_log';
      const senhaAPI = 'F14C7D7625414A3E5DA1811349667';
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': senhaAPI
        },
      })
      .then(response => response.text())
      .then(logData => {
        const jsonData = JSON.parse(logData);
        const decodedPayload = atob(jsonData.token.split('.')[1]);
        const parsedPayload = JSON.parse(decodedPayload);
        console.log(parsedPayload);
        console.log(decodedPayload)
        token = decodedPayload;
        console.log(token)
        const element = document.createElement('a');
        const file = new Blob([token], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'log.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element); // Limpa o elemento após o uso
      })
      .catch(error => {
        console.error('Erro:', error);
        alert("Erro ao baixar o log");
      });
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  return (
    <div className="Button">
      <button onClick={handleDownload}>Baixar Log</button>
    </div>
  );
}

export default Log;
