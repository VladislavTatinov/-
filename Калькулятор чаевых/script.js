function calculateTip() {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var numPeople = parseInt(document.getElementById('numPeople').value);
    var serviceQuality = parseInt(document.getElementById('serviceQuality').value);

    if (isNaN(billAmount) || isNaN(numPeople)) {
        alert('Please enter valid numbers for bill amount and number of people.');
        return;
    }

    if (numPeople <= 0) {
        alert('Number of people must be greater than zero.');
        return;
    }

    var tipAmount = (billAmount * serviceQuality) / 100;
    var tipPerPerson = tipAmount / numPeople;

    document.getElementById('tipPerPerson').textContent = '$' + tipPerPerson.toFixed(2);
    document.getElementById('totalTip').textContent = '$' + tipAmount.toFixed(2);
}

function resetFields() {
    document.getElementById('billAmount').value = '';
    document.getElementById('numPeople').value = '';
    document.getElementById('serviceQuality').selectedIndex = 0;
    document.getElementById('tipPerPerson').textContent = '$0.00';
    document.getElementById('totalTip').textContent = '$0.00';
}
