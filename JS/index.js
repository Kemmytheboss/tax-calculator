// ✅ Make sure the DOM is ready before accessing elements
document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.getElementById('calculateBtn');
  
  calculateBtn.addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    const output = document.getElementById('output');

    if (isNaN(income) || isNaN(taxRate)) {
      output.textContent = "Please enter valid numbers.";
      return;
    }

    const tax = income * (taxRate / 100);
    const netIncome = income - tax;

    output.innerHTML = `
      Tax Amount: $${tax.toFixed(2)}<br>
      Net Income After Tax: $${netIncome.toFixed(2)}
    `;
  });
});
