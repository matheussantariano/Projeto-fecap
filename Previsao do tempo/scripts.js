// Variável que armazena a chave da API
let chave = "cebcd482eda57fa9a6714c1c2ba91885";

// Função que insere os dados na tela
function colocarNaTela(dados) {
    console.log(dados); // Exibe os dados no console (para fins de depuração)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".descricao").innerHTML = dados.weather[0].description;
    document.querySelector(".icone").src =
        "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

// Função assíncrona para buscar dados da cidade na API
async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    )
        .then((resposta) => resposta.json()); // Converte a resposta para JSON

    colocarNaTela(dados); // Chama a função para inserir os dados na tela
}

// Função que é chamada quando o botão é clicado
function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value; // Obtém o valor do campo de entrada

    buscarCidade(cidade); // Chama a função para buscar dados da cidade
}

// Função que é chamada quando a tecla "Enter" é pressionada no campo de entrada
function pressionouEnter(event) {
    if (event.key === "Enter") {
        cliqueiNoBotao(); // Chama a função de busca ao pressionar "Enter"
    }
}
