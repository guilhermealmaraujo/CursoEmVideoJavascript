let array = []

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    
    let numtxt = document.getElementById('numtxt')
    
    num = Number(numtxt.value)

        
    if(num < 1 || num > 100 || inlista(numtxt.value, array) ){
        alert('Você não inseriu uma entrada válida, tente novamente!')
    }else{
        array.push(num)
        let seletor = document.getElementById('seletor')
        let item = document.createElement('option')
        item.text = `Você acabou de adicionar o numero: ${num}`
        seletor.appendChild(item)
    }


    numtxt.value = ''
}

function finalizar(){

    if(array.length == 0){
        alert('Favor adicionar algum numero ao array!')
    }else{
        let final = document.getElementById('final')
   
        final.innerHTML = `<p>Ao todo, temos ${array.length} números cadastrados</p>`
    
        final.innerHTML += `<p>O maior valor informador foi ${Math.max.apply(null, array)}</p>`
    
        final.innerHTML += `<p>O maior valor informador foi ${Math.min.apply(null, array)}</p>`
    
        final.innerHTML += `<p>Somando todos os valores, temos ${somando()}</p>`
    
        final.innerHTML += `<p>A média dos valores digitados é: ${media()} </p>`
    }



}

function somando(){

    let somatorio = 0

    for(let i in array){
        somatorio += array[i]
    }

    return somatorio

}

function media(){

    return somando() / array.length

}
