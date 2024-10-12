// cotação do dia 
const USD = 5.61
const EUR = 6.14
const GBP = 7.33

// Obtendo elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input para receber somente números
amount.addEventListener("input", () => {

  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
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

// Função de conversão
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda
description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
// calculo do total
let total = amount * price
// Verifica se o resultado não é um número
if (isNaN(total)) {
  return alert("Por favor, digite o valor corretamente para converter.")
}

// formatando o valor total
total = formatCurrencyBRL(total).replace("R$", "")
// exibe o resultado total
result.textContent = `${total} Reais`

    // aplica a classe que exibe o resultado
footer.classList.add("show-result")
  
  } catch (error) {
    console.log(error)

    // remove a classe do footer removendo o resultado
    footer.classList.remove("show-list")
    alert("Não foi possível concluir a sua solicitação. Tente novamente mais tarde.")

  }
}
// formata a moeda em real
function formatCurrencyBRL(value){
  // converte para número para utilizar o toLocaleString para formatar o no padrão BRL
return Number(value).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
})
}