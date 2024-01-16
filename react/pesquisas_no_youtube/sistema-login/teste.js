var myHeaders = new Headers();
console.log(myHeaders)
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-API-KEY", "F14C7D7625414A3E5DA1811349667");
console.log(myHeaders)
var raw = JSON.stringify({
    "email": "teste1@hotmail.com",
    "senha": "teste1@hotmail.com"
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://chat.conexaoia.digital/verificar_credenciais", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));