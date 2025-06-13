
const result = document.getElementById('calculation-result');
const addBtn = document.getElementById('add')
const subtractBtn = document.getElementById('subtract')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')

const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (a, b) => {
    return  a * b;
};

const divide = (a, b) => {
    return a / b;
};

const getInputs = () => {
    const input1 = parseFloat(document.getElementById('number1').value) || 0;
    const input2 = parseFloat(document.getElementById('number2').value) || 0; 
    return [ input1, input2 ]
}

addBtn.addEventListener('click', () => { 
    const [ input1, input2 ] = getInputs()
    result.textContent = add(input1, input2);   
})

multiplyBtn.addEventListener('click', () => { 
    const [ input1, input2 ] = getInputs()
    result.textContent = multiply(input1, input2);   
})

divideBtn.addEventListener('click', () => { 
    const [ input1, input2 ] = getInputs()
    result.textContent = divide(input1, input2);   
})

subtractBtn.addEventListener('click', () => { 
    const [ input1, input2 ] = getInputs()
    result.textContent = subtract(input1, input2);   
})
