const checkboxes = document.querySelectorAll('.price-item');
const totalPriceEl = document.getElementById('total-price');

function updateTotal() {
  let total = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) {
      total += Number(cb.value);
    }
  });
  totalPriceEl.textContent = '¥' + total.toLocaleString();
}

checkboxes.forEach(cb => {
  cb.addEventListener('change', updateTotal);
});
