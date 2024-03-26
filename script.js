const resultBox = document.querySelector('.result-box');

// Function to append value to the result box
const appendToResult = (value) => {
    resultBox.textContent += value;
}

// Function to calculate the result of the expression
const calculateResult = () => {
    try {
        const result = eval(resultBox.textContent);

        if (result === Infinity) {
            resultBox.textContent = "∞";
        } else if (result === -Infinity) {
            resultBox.textContent = "-∞";
        } else {
            resultBox.textContent = result;
        }

    } catch (error) {
        resultBox.textContent = "Error";
    }
}

// Function to calculate the square of a number
const square = () => {
    const currentValue = parseFloat(resultBox.textContent);
    const squareValue = currentValue * currentValue;
    resultBox.textContent = squareValue;
}

// Function to calculate the square root of a number
const squareRoot = () => {
    const currentValue = parseFloat(resultBox.textContent);
    const squareRootValue = Math.sqrt(currentValue);
    resultBox.textContent = squareRootValue;
}

// Function to clear the result box
const clearResult = () => {
    resultBox.textContent = '';
}

// Function to delete the last character from the result box
const backspace = () => {
    resultBox.textContent = resultBox.textContent.slice(0, -1);
}

// Function to display a stylish console message
const stylishConsoleMessage = (message, color, fontSize, fontWeight) => {
    console.log(`%c${message}`, `color: ${color}; font-size: ${fontSize}; font-weight: ${fontWeight}; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); background-image: linear-gradient(to right, #ff7e5f, #ffafbd); padding: 8px; border-radius: 5px;`);
}

// Displaying a stylish console message about the calculator
stylishConsoleMessage("This is a calculator made with HTML, CSS, and JavaScript", "white", "20px", "bold");
