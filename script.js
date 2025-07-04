//Cotação de moedas do dia 
const USD = 5.41
const EUR = 6.37
const GBP = 7.39

//Obtendo eventos do formulario
const form = document.querySelector("form")
const footer = document.querySelector("main footer")

const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

const hasCaractersRegex = /\D+/g //expressão para encontrar caracteres
    

//Manipulando o Input amount para receber somente números
amount.addEventListener("input", () => {  
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

//Capturando o evento de submit (enviar) do formulario 
form.onsubmit = (event) => {
    event.preventDefault()
    
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break    
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break     
    }
}

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        footer.classList.add
        
    } 
    
    catch (error) {
        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}