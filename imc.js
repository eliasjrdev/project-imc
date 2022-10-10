let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let resp1 = document.querySelector('.txtres1')
let resp2 = document.querySelector('.txtres2')
let contres = document.querySelector('.containerres')
let butcalc = document.getElementById('submcalc')

function limpar(){
    peso.value = ''
    altura.value = ''
    resp1.innerHTML = ''
    resp2.innerHTML = ''
    butcalc.style.position = 'absolute'
    contres.style.display = 'none'
}

function calcular(){
    let resultado = peso.value / (altura.value * altura.value)
    resultado.toFixed(2)
    resp1.innerHTML = `Seu IMC é: ${resultado.toFixed(2)}`
    contres.style.display = 'block'
    butcalc.style.position = 'relative'

    if(peso.value == '' || altura.value == ''){
        window.alert('Preencha todas as informações')
        resp1.innerHTML = ''
        resp2.style.display = 'none'
        contres.style.display = 'none'
        butcalc.style.position = 'absolute'

    }else if(resultado < 18.5){
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



