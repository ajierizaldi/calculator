// Layar
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}


// Input
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}


// Operator
const operators = document.querySelectorAll(".operator")
const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})


// Equal Sign
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})


// Clear Button (AC)
const clearBtn = document.querySelector('.all-clear')
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})


// Decimal
const decimal = document.querySelector('.decimal')
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) =>{
    inputDecimal(event.target.value)
    updateScreen(inputDecimal)
})


// Calculate
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}


// Tombol
const number = document.querySelectorAll(".number");
number.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
