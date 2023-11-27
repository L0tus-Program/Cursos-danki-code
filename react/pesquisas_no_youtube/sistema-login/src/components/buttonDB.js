import React from 'react';

function DB() {
  async function backup() {
    try {
      const apiUrl = 'https://chat.conexaoia.digital/backup';
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
      link.setAttribute('download', 'openaai.db');
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
      <button onClick={backup}>Baixar Banco de Dados</button>
    </div>
  );
}

export default DB;
