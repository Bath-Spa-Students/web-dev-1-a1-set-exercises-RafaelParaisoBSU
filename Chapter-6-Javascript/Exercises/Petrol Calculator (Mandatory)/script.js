// This function runs when the window finishes loading
window.onload = () => {
    // Set the initial value of the price input field to 1.72
    document.querySelector('#price').value = 1.72;

    // Select the button element with id 'calculateButton'
    const calculateButton = document.querySelector('#calculateButton');

    // Add an event listener to the button, listening for 'click' event
    calculateButton.addEventListener('click', calculate);

    // Set initial value for total amount to 0
    document.querySelector('#totalAmount').innerText = "0";
}

// This function calculates the total amount based on price and litres input
function calculate() {
    // Get the price value from the input field and convert it to a float
    const price = parseFloat(document.querySelector('#price').value);
    
    // Get the litres value from the input field and convert it to a float
    const litres = parseFloat(document.querySelector('#litres').value);
    
    // Check if either price or litres is not a number (NaN)
    // If so, exit the function without calculating
    if (isNaN(price) || isNaN(litres)) return;
    
    // Calculate the total amount by multiplying price and litres
    const totalAmount = price * litres;
    
    // Update the text content of the element with id 'totalAmount' to show the calculated total amount
    document.querySelector('#totalAmount').innerText = totalAmount.toFixed(2); // toFixed(2) is used to display only two decimal places
}
