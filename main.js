//comece aqui
nomePessoas = [];

function enviarNomes() {

    let nomeConvidado = document.getElementById("nomes").value;
    nomePessoas.push(nomeConvidado);
    document.getElementById("mostrarNomes").innerHTML = nomePessoas.toString();
    console.log(enviarNomes)
};

function emOrdemAlfabetica() {
    nomePessoas.sort();
    let i = nomePessoas.join("<br>");
    document.getElementById("ordemAlfabetica").innerHTML = i.toString();
}

function nomesLista() {

    let i = nomePessoas.join("<br>");
    document.getElementById("nomesEmLista").innerHTML = i.toString();
}

function pesquisarNomes() {
    let s = document.getElementById("pesquisarNome").value;
    let encontrados = 0;
    let contador = 0;

    for (let contador = 0; contador < nomePessoas.length; contador++) {

        if (s == nomePessoas[contador]) {
            encontrado = encontrado + 1;
        }
    }
    document.getElementById("nomesLocalizados").innerHTML = "nome" + encontrado + "vezes"
}


