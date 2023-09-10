
const convertButton = document.querySelector("#convert-button")

function convertValues() {
    const input = document.querySelector(".amount-input").value
    const realAmount = document.querySelector(".real-amount")
    const currencyAmount = document.querySelector(".currency-amount")

    const dolar = 5.20

    const convert = input / dolar

    realAmount.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)
    currencyAmount.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convert)
    console.log(convert)
}

convertButton.addEventListener("click", convertValues)

//console.log(convertButton)