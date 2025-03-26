let qtdDeCartas = Number(prompt('Com quantas cartas deseja jogar? (Escolha entre 4 e 14, apenas numeros pares)'))

let cartas = []
let contagem = 1

while(qtdDeCartas % 2 !== 0 || qtdDeCartas > 16 || qtdDeCartas < 4) {
    qtdDeCartas = Number(prompt('Com quantas cartas deseja jogar? (Escolha entre 4 e 14, apenas numeros pares)'))    
    console.log(qtdDeCartas)
    
}

while(cartas.length < qtdDeCartas){
    cartas.push(contagem)
    cartas.sort(comparador)
    document.querySelector('section').innerHTML += `<div class="card">
    <img src="images/front.png" alt="">
    </div>`
    contagem++

    
}

function comparador(){
    return Math.random() - 0.5;
}

console.log(cartas)
