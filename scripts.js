const convertButton = document.querySelector('#convert-button')
const currencySelect = document.querySelector('.currency-select')

function clickButton() {
    const inputValue = document.querySelector('.amount-input').value
    const realAmount = document.querySelector('.real-amount')
    const currencyAmount = document.querySelector('.currency-amount')
    const currencyLogo = document.querySelector('#currency-logo')
    const currencyName = document.querySelector('.currency-name')
    
    const dolarToday = 5.2
    const euroToday = 6

    if (currencySelect.value == 'dolar') {
        currencyAmount.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue / dolarToday)
        currencyName.innerHTML = 'Dólar Americano'
        currencyLogo.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'euro') {
        currencyAmount.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue / euroToday)
        currencyName.innerHTML = 'Euro'
        currencyLogo.src = './assets/euro.png'
    }

    realAmount.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue)
}


convertButton.addEventListener('click', clickButton)
currencySelect.addEventListener('change', clickButton)