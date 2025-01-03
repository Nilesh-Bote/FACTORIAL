function calculateFactorial() {
    const number = document.getElementById("number").value;
    const resultElement = document.getElementById("result");

    if (number === "") {
        resultElement.textContent = "Please enter a number.";
        return;
    }

    let n = parseInt(number);
    if (n < 0) {
        resultElement.textContent = "Factorial is not defined for negative numbers.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    resultElement.textContent = `The factorial of ${n} is ${factorial}.`;
}
