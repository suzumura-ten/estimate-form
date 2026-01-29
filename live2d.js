const form = document.getElementById("estimateForm");
const totalDisplay = document.getElementById("total");

form.addEventListener("change", () => {
  let total = 0;

  const inputs = form.querySelectorAll("input");
  inputs.forEach(input => {
    if (input.checked) {
      total += Number(input.value);
    }
  });

  totalDisplay.textContent = "¥" + total.toLocaleString();
});
