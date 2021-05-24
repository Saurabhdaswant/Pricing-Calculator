const priceInput = document.querySelector("[name = price]");
const QuantityInput = document.querySelector("[name=quantity]");
const totalDiv = document.querySelector(".totalDiv");
const quantityLabel = document.querySelector(".quantity-label");

//just checking
console.log(priceInput, quantityLabel, QuantityInput, totalDiv);

// creat the function that we'll need
function callBack() {
  const price = priceInput.value;
  const quantity = QuantityInput.value;
  const total = price * quantity;
  totalDiv.textContent = " $" + total.toFixed(2);
}

function updateQuantityLabel() {
  const quantity = QuantityInput.value;
  quantityLabel.textContent = quantity;
}

callBack();

//add our event listeners
priceInput.addEventListener("input", callBack);
QuantityInput.addEventListener("input", callBack);
QuantityInput.addEventListener("input", updateQuantityLabel);
