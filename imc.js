let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let resp1 = document.querySelector('.txtres1')
let resp2 = document.querySelector('.txtres2')
let resp3 = document.querySelector('.txtres3')

function calcular(){
    let resultado = peso.value / (altura.value * altura.value)
    resp1.style.display = 'block'
    resp1.innerHTML = `Seu IMC é: ${resultado.toFixed(2)}`
    resp2.style.display = 'block'
    
    if(resultado < 18.5){
        resp2.innerHTML = 'Você está abaixo do peso !'
    }else if(resultado >= 18.5 && resultado <= 24.9){
        resp2.innerHTML = 'Você está no peso ideal !'
    }else if(resultado >= 25 && resultado <= 29.9){
        resp2.innerHTML = 'Você está Acima do peso (sobrepeso)!'
    }else if(resultado >= 30 && resultado <= 34.9){
        resp2.innerHTML = 'Você está Acima do peso (Obesidade I)!'
    }else if(resultado >= 35 && resultado <= 39.9){
        resp2.innerHTML = 'Você está Acima do peso (Obesidade II)!'
    }else if(resultado > 40){
        resp2.innerHTML = 'Você está Acima do peso (Obesidade III)!'
    }
}



