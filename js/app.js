let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

let arrPessoas = []

function cadastrar(){

    let pessoa = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        categoria: document.getElementById('categoria').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value
    }

    arrPessoas.push(pessoa)
    console.log(arrPessoas);

    imprimirDados()

   
}


function calculaIMC(peso, altura){
    return peso / Math.pow(altura,2)
}

function classificacao(imc){

    if(imc <= 18.5){
        return "Abaixo do Normal"
    }else if(imc <= 24.9){
        return "Normal"
    }else if(imc <= 29.9){
        return "Sobre peso"
    }else if(imc <= 34.9){
        return "Obesidade grau I"
    }else if(imc <= 39.9){
        return "Obesidade grau II"
    }else{
        return "Obesidade grau III"
    }

}


function imprimirDados(){

    div.innerHTML=''
    
    for(let i = 0; i < arrPessoas.length; i++){

        div.innerHTML += `
        <tr>
            <td>${arrPessoas[i].nome}  ${arrPessoas[i].sobrenome}</td>
            <td>${arrPessoas[i].categoria}</td>
            <td>${calculaIMC(arrPessoas[i].peso, arrPessoas[i].altura).toFixed(2)} - ${classificacao(calculaIMC(arrPessoas[i].peso, arrPessoas[i].altura))}</td>
        </tr>
        `
    }
}



btn.addEventListener('click',cadastrar)