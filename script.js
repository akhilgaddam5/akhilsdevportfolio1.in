// JavaScript code for any dynamic functionality
// For example, a form submission handling or interactive elements
// Event Handling
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    button.style.backgroundColor = 'red';
});

// DOM Manipulation
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph added to the document.';
document.body.appendChild(newParagraph);

// Conditional Statements
const number = 10;
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}

// Array Manipulation
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.reverse();
console.log('Reversed Array:', reversedArray);

// Function Usage
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const numberToFactorial = 5;
const result = factorial(numberToFactorial);
console.log(`Factorial of ${numberToFactorial} is ${result}`);
