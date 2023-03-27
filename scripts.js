//VARIAVEIS => e um espaço da memoria que guardamos almua coisa

//EX:
//let abacate = "teste java script"
//console.log(abacate)

// função e uma treixo de codigo que so e executado quando e chamado

//function mario(){
 //   console.log("Estou dentro da função")
//}
//mario()//chamando a função

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC   " + "Máxima:   " + Math.floor(dados.main.temp_max)+ "ºC    " + "Minima:   " + Math.floor(dados.main.temp_min)+ "ºC"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + 
        chave + "&lang=pt_br" + "&units=metric")

    .then(resposta => resposta.json())

    colocarNaTela(dados)
}



function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}
