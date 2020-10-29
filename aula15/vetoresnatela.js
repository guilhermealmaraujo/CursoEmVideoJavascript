let valores = [8,1,7,4,2,9]

console.log('Imprimindo os elementos do vetor usando for')
for(let i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem valor ${valores[i]}`)
}

console.log('Imprimindo os elementos do vetor usando while')
let i = 0
while(i < valores.length){
    console.log(`A posição ${i} tem valor ${valores[i]}`)
    i++
}

console.log('Imprimindo os elementos do vetor usando for in')
for(let x in valores){
    console.log(`A posição ${x} tem valor ${valores[x]}`)
}

console.log('Imprimindo os elementos do vetor usando forEach')
valores.forEach(element => {
    console.log(element)
});

console.log(`O valor 7 está na posição ${valores.indexOf(7)}`)

console.log(`O valor 5 está na posição ${valores.indexOf(5)}, ele não existe no vetor`)

