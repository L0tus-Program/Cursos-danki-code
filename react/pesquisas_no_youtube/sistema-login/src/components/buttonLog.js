import React from 'react';

function Log() {
  async function handleDownload() {
    try {
      const apiUrl = 'https://chat.conexaoia.digital/all_log';
      const senhaAPI = 'F14C7D7625414A3E5DA1811349667';

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': senhaAPI
        },
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'log.txt');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao baixar o log');
    }
  }

  return (
    <div className="Button">
      <button onClick={handleDownload}>Baixar Log</button>
    </div>
  );
}

export default Log;
