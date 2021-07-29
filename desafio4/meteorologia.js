let temp
let soma = 0
let count = 0
while(true){
    temp = parseInt(prompt("Digite o valor da temperatura: "))
    if(temp === 0){
        break
    }
    soma = soma + temp
    count = count + 1
}
let media = soma / count
console.log("A média das temperaturas digitadas foi de: " +media +"°C")