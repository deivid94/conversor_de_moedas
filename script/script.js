const USD = 5.72
const EUR = 5.97
const GBP = 7.20


const input = document.querySelector("input")
const select = document.querySelector("select")
const form = document.querySelector("form")
const resultado = document.getElementById("resultado")
const calculo = document.getElementById("calculo")


input.addEventListener("input", ()=>{
    const CharacterRegex = /\D+/g
    input.value = input.value.replace(CharacterRegex, "")
    
    
})

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    switch (select.value){
        case "USD" :
            ConvertMoeda(input.value, USD, "US$")
            break
        case "EUR" :
            ConvertMoeda(input.value, EUR,"€")
            break
        case "GBP" :
            ConvertMoeda(input.value, GBP,"£" )    
            break

    }   
    
})


function ConvertMoeda (input, price, coin) {
    let result =  (input*price).toFixed(2)+" "+coin

    resultado.innerText = result
    calculo.innerText = `1 ${coin} = ${price} Reais`
    
}


