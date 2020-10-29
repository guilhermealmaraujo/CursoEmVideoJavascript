function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('[ERRO] Faltam Dados!')
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'   

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1!!!')
            p = 1
        }

        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }

        }else{
            //contagem regressiva
            for(let c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }

        }

        

        res.innerHTML += `\u{1f3c1}`
    }
/*
    var inicio = Number(inicio.value)
    var fim = Number(fim.value)

    console.log('entrou aki')

    var res = document.getElementById('res')

    var strContagem = ''

    if(inicio.value == 0 || fim.value == 0){
        
        res.innerHTML = `<p>Não é possível fazer a contagem</p>`
    
    }else{

        if(passo.value == 0){
            alert('O passo não pode ser zero, configurando passo para valor 1')
            passo.value = 1
        }
        

        for(var cont = inicio; cont <= fim; cont+=passo){
            strContagem += `${cont} -> `
        }
    
        strContagem += 'FIM'
    
        res.innerHTML = `<p>${strContagem}</p>`

    }
*/
}


