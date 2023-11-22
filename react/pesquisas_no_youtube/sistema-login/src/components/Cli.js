import React from "react";
import './cli.css'



function Cli() {
    function query() {
        const cli = document.getElementById("cli");
        console.log(cli.value)
        const valor_cli = cli.value
        // Exemplo de requisição
        const apiUrl = 'https://chat.conexaoia.digital/query';
        const contentType = 'application/sql';

        // Corpo da solicitação com os valores coletados, incluindo a senha da API
        const data = valor_cli;

        // Configuração da solicitação com a senha da API no cabeçalho
        const senhaAPI = 'F14C7D7625414A3E5DA1811349667';

        let jsonData_key; // Declare as variáveis aqui
        let token;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': contentType,
                'X-API-KEY': senhaAPI
            },
            body: data
        })
            .then(response => response.text())
            .then(result => {
                const jsonData = JSON.parse(result);
                console.log(jsonData)
                //alert(JSON.stringify(jsonData));
                const resultado = JSON.stringify(jsonData);
                const divResultado = document.getElementById('resultadoPesquisa');
                divResultado.innerHTML += `<div>${resultado}</div>`;
                //const decodedPayload = atob(jsonData.token.split('.')[1]);
                //const parsedPayload = JSON.parse(decodedPayload);
                //console.log(parsedPayload);
                // console.log(decodedPayload)
                //token = decodedPayload;
                //console.log(token)

                console.log(`Query executada com sucesso ${data}`)



            })
            .catch(error => {
                console.error('Erro:', error);
                const resultado = JSON.stringify(error);
                const divResultado = document.getElementById('resultadoPesquisa');
                divResultado.textContent = resultado;

            });



    }

    function clearQuery() {
        const divResultado = document.getElementById('resultadoPesquisa');
        divResultado.textContent = ''; // Limpa o conteúdo da div de resposta
    }
    return (
        <div className="consultas">


            <input type="text" id="cli" name="input" />
            <div id="resultadoPesquisa"></div>
            <button id="clear_query" type="button" onClick={clearQuery}>Limpar consulta</button>
            <button id="send_query" type="button" onClick={query}>Enviar query</button>
        </div>
    )
}


export default Cli