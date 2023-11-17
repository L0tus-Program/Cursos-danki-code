function escreve_nome() {
    nome = "Felipe";
    console.log("Meu nome é " + nome);
}
var variavel = "variavel" // Var é global, let é no escopo local


function alerta() {
    nome = prompt("Insira seu nome: ");
    alert("Seu nome é " + nome);
    console.log("Entrando na função alerta")
}

function inicia_for(indice) {
    for (i = 0; i < indice; i++) {
        console.log("Indice = " + i)
    }

}