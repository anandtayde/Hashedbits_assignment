// Display even numbers from 1 to 100
function displayEvenNumbers() {
    let output = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            output += i + ' ';
        }
    }
    document.getElementById('even-numbers-output').innerText = output;
}

// Function to add, subtract, multiply, and divide using switch
function calculate(n1, n2, operation) {
    switch (operation) {
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1 * n2;
        case 'divide':
            if (n2 !== 0) {
                return n1 / n2;
            } else {
                return 'Error: Division by zero';
            }
        default:
            return 'Error: Invalid operation';
    }
}

function performCalculation() {
    const n1 = parseFloat(document.getElementById('calc-n1').value);
    const n2 = parseFloat(document.getElementById('calc-n2').value);
    const operation = document.getElementById('calc-operation').value;
    const result = calculate(n1, n2, operation);
    document.getElementById('calc-output').innerText = 'Result: ' + result;
}

// Function to calculate tax based on salary using switch
function findTax(salary) {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.2;
            break;
        case (salary > 1500000):
            taxRate = 0.3;
            break;
        default:
            return 'Error: Invalid salary';
    }
    return salary * taxRate;
}

function calculateTax() {
    const salary = parseFloat(document.getElementById('salary').value);
    const tax = findTax(salary);
    document.getElementById('tax-output').innerText = 'Tax: ' + tax;
}

// Function to find the sum of the products of corresponding digits of two numbers
function sumOfProducts(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();

    // Ensure both numbers have the same length by padding with zeros
    while (str1.length < str2.length) {
        str1 = '0' + str1;
    }
    while (str2.length < str1.length) {
        str2 = '0' + str2;
    }

    let sum = 0;
    for (let i = 0; i < str1.length; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }

    return sum;
}

function findSumOfProducts() {
    const n1 = parseInt(document.getElementById('sp-n1').value);
    const n2 = parseInt(document.getElementById('sp-n2').value);
    const result = sumOfProducts(n1, n2);
    document.getElementById('sp-output').innerText = 'Sum of Products: ' + result;
}
