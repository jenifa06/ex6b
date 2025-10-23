const amountInput = document.getElementById("amount");
const gstSelect = document.getElementById("gst");
const actualEl = document.getElementById("actual");
const gstAmtEl = document.getElementById("gstamt");
const totalEl = document.getElementById("total");
const resetBtn = document.getElementById("reset");

function format(num) {
  return Number(num).toFixed(2);
}

function calculate() {
  const amount = parseFloat(amountInput.value) || 0;
  const gst = parseFloat(gstSelect.value) || 0;

  const gstAmount = (amount * gst) / 100;
  const total = amount + gstAmount;

  actualEl.textContent = format(amount);
  gstAmtEl.textContent = format(gstAmount);
  totalEl.textContent = format(total);
}

// Update automatically when user types or changes GST
amountInput.addEventListener("input", calculate);
gstSelect.addEventListener("change", calculate);

resetBtn.addEventListener("click", () => {
  amountInput.value = "";
  gstSelect.value = "0";
  actualEl.textContent = "0.00";
  gstAmtEl.textContent = "0.00";
  totalEl.textContent = "0.00";
});
