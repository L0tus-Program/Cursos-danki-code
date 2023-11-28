import React, {useState} from "react";





function AllFalse() {
  //  const [codigo, setCodigo] = useState('');
    

    function consulta() {
        //event.preventDefault();
        //console.log("Desabilitando", codigo);

        const apiUrl = 'https://chat.conexaoia.digital/enviar_false';
        const contentType = 'application/json';
        const senhaAPI = 'F14C7D7625414A3E5DA1811349667';

        /*const data = {
            codClient: codigo
        };*/

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': contentType,
                'X-API-KEY': senhaAPI
            },
           // body: JSON.stringify(data)
        })
        .then(response => response.json()) // Parse da resposta para JSON
        .then(result => {
            console.log(result);
            const { token } = result;
            const [, payloadEncoded] = token.split('.');
            const payloadDecoded = atob(payloadEncoded);
            console.log('Conteúdo do Payload:', payloadDecoded);
            // Faça o que precisa com o payload decodificado
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }

    return (
        <button onClick={consulta}>AllFalse</button>
    );
}

export default AllFalse;