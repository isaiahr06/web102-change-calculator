// Write your JavaScript here

function calculateChange() {
    // Get the input values
    let amountDue = parseFloat(document.getElementById('amount-due').value);
    let amountReceived = parseFloat(document.getElementById('amount-received').value);
    // Calculate the change
    let change = Math.round((amountReceived - amountDue) * 100);
    // Calculate the number of dollars, quarters, dimes, nickels, and pennies
    let dollars = Math.floor(change / 100);
    change = change % 100;
    let quarters = Math.floor(change / 25);
    change = change % 25;
    let dimes = Math.floor(change / 10);
    change = change % 10;
    let nickels = Math.floor(change / 5);
    change = change % 5;
    let pennies = change;
    // Update the output
    document.getElementById('dollars-output').textContent = dollars;
    document.getElementById('quarters-output').textContent = quarters;
    document.getElementById('dimes-output').textContent = dimes;
    document.getElementById('nickels-output').textContent = nickels;
    document.getElementById('pennies-output').textContent = pennies;


    }
