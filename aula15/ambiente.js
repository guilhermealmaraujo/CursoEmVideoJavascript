let num = [5,8,2,9,3]

console.log(`Nosso vetor é o ${num}`)
console.log(`O tamnho do array é: ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(`Adicionando o elemento 6 ao final`)
//num[5] = 6
num.push(6)
console.log(`O tamnho do array agora é: ${num.length}`)
console.log(`Nosso vetor agora é o ${num}`)

num.sort()
console.log(`Nosso vetor ordenado é assim ${num}`)
console.log(`O primeiro valor do vetor agora é ${num[0]}`)