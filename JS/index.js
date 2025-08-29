function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    if (isNaN(income) || isNaN(taxRate)) {
      document.getElementById('output').textContent = "Please enter valid numbers.";
      return;
    }

    const tax = income * (taxRate / 100);
    const netIncome = income - tax;

    document.getElementById('output').innerHTML = `
      Tax Amount: $${tax.toFixed(2)}<br>
      Net Income After Tax: $${netIncome.toFixed(2)}
    `;
  }