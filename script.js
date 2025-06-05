 let total = 0;
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  
  const cart = {};

  function addToCart(itemName, price) {
    if (cart[itemName]) {
      cart[itemName].quantity += 1;
    } else {
      cart[itemName] = { price: price, quantity: 1 };
    }
    updateCartUI();
  }

  function removeFromCart(itemName) {
    if (cart[itemName]) {
      cart[itemName].quantity -= 1;
      if (cart[itemName].quantity === 0) {
        delete cart[itemName];
      }
    }
    updateCartUI();
  }

  function updateCartUI() {
    cartItems.innerHTML = "";
    total = 0;

    for (let item in cart) {
      const li = document.createElement("li");
      const itemTotal = cart[item].price * cart[item].quantity;
      total += itemTotal;

      li.innerHTML = `
        ${item} - ₹${cart[item].price} x ${cart[item].quantity} = ₹${itemTotal}
        <button onclick="removeFromCart('${item}')">Remove</button>
      `;
      cartItems.appendChild(li);
    }

    totalDisplay.textContent = total;
  }