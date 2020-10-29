function gerartabuada(){

    let num = document.getElementById('numtxt')

    let text = document.getElementById('seltab')
    

    if(num.value.length == 0){
        
        window.alert('Por favor, digite um número!')

    }else{
        
        let numTab = Number(num.value)

        let c = 1

        text.innerHTML = ''

        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${c} x ${num.value} = ${c*num.value}`
            item.value = `tab${c}`
            text.appendChild(item)
            c++
        }

    }

    


}