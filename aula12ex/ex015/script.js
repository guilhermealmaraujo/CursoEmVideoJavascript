function verificar(){
    var data = new Date()

    var ano = data.getFullYear()

    var fAno = window.document.getElementById('txtano')

    var res = window.document.getElementById('res')

    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        
        window.alert('Erro: Verifique os dados e tente novamente!')
    
    }else{

        var fsex = document.getElementsByName('radsex')
        
        var idade = ano - Number(fAno.value)

        var genero = ''

        var img = window.document.createElement('img')

        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe_masculino.png')
            }else if (idade < 21){
                img.setAttribute('src', 'jovem_masculino.png')
            }else if (idade < 50){
                img.setAttribute('src', 'adulto_masculino.png')
            }else{
                img.setAttribute('src', 'idoso_masculino.png')
            }


        }else if (fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe_feminino.png')
            }else if (idade < 21){
                img.setAttribute('src', 'jovem_feminino.png')
            }else if (idade < 50){
                img.setAttribute('src', 'adulto_feminino.png')
            }else{
                img.setAttribute('src', 'idoso_feminino.png')
            }
        }

        res.style.textAlign = 'center'

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

        res.appendChild(img)

    }


}