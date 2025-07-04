//Cotação de moedas do dia 
const USD = 5.41
const EUR = 6.37
const GBP = 7.39

//Obtendo eventos do formulario
const form = document.querySelector("form")
const footer = document.querySelector("main footer")

const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const description = document.getElementById("description")
const result = document.getElementById("result")

const hasCaractersRegex = /\D+/g //expressão para encontrar caracteres
    

//Manipulando o Input amount para receber somente números
amount.addEventListener("input", () => {  
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

//Capturando o evento de submit (enviar) do formulario 
form.onsubmit = (event) => {
    event.preventDefault()
    
    switch(currency.value){
        case "USD": //Se for Dolar
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR": //Se for Euro
            convertCurrency(amount.value, EUR, "€")
            break    
        case "GBP": //Se for Libra
            convertCurrency(amount.value, GBP, "£")
            break     
    }
}

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        //Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        
        //Calcula o resultado total
        let total = (amount * price)
        total = formatCurrencyBRL(total)

        //Exibe o resultado total
        result.textContent = `${total}`

        //Aplica a classe que exibe o valor da conversão
        footer.classList.add("show-result")
    } 
    
    catch (error) {
        //Esconde a classe que exibe o valor da conversão
        footer.classList.remove("show-result")
        
        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

//Função para formatar o valor para a moeda do país de origem (BRL)
function formatCurrencyBRL(value){

    //Converte para numero para utilizar o toLocaleString para formatar para o padrão BRL (R$ 00,00)
    return Number(value).toLocaleString("pr-BR", {
        style: "currency",
        currency: "BRL"
    })
}