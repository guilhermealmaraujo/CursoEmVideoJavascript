function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2,5))

//é o mesmo que 2 + indefinido, portanto NaN, caso nao tivesso no parametro n1=0
console.log(soma(2))

console.log(soma('eu te', ' amo'))