// Add item to cart (called on button click)
function addToCart(productName, price, quantityId) {
  const quantity = parseInt(document.getElementById(quantityId).value);
  if (quantity > 0) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ name: productName, price: price, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} added to cart.`);
  } else {
    alert("Please enter a valid quantity.");
  }
}

// Load cart items on the cart page
document.addEventListener("DOMContentLoaded", function () {
  const cartTableBody = document.querySelector("#cart-table tbody");
  const totalPriceEl = document.getElementById("total-price");

  if (!cartTableBody || !totalPriceEl) return; // Avoid errors on other pages

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach(item => {
    const row = document.createElement("tr");

    const itemCell = document.createElement("td");
    itemCell.textContent = item.name;

    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;

    const priceCell = document.createElement("td");
    priceCell.textContent = `$${item.price}`;

    const totalCell = document.createElement("td");
    const itemTotal = item.quantity * item.price;
    total += itemTotal;
    totalCell.textContent = `$${itemTotal}`;

    row.appendChild(itemCell);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);
    row.appendChild(totalCell);

    cartTableBody.appendChild(row);
  });

  totalPriceEl.textContent = total.toFixed(2);
});

function addToFavourites(productName) {
  alert(productName + " has been added to your favourites!");

  let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  if (!favourites.includes(productName)) {
    favourites.push(productName);
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }
}

// ✅ Pay Now function with delivery message
function payNow() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  // Calculate delivery date (random 3 to 5 days from now)
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 3) + 3;
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + randomDays);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = deliveryDate.toLocaleDateString(undefined, options);

  // Clear cart
  localStorage.removeItem("cart");

  // Show confirmation message
  const messageDiv = document.getElementById("confirmation-message");
  if (messageDiv) {
    messageDiv.textContent = `Thank you for your purchase! Your items will be delivered by ${formattedDate}.`;
  } else {
    alert(`Thank you for your purchase! Your items will be delivered by ${formattedDate}.`);
  }

  // Optionally: refresh or redirect
  // location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('payment-form');
  const thankYouMessage = document.getElementById('thank-you-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission

    // Calculate a delivery date (e.g., 5 days from today)
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 5);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = deliveryDate.toLocaleDateString(undefined, options);

    // Display thank you message with delivery date
    thankYouMessage.textContent = `Thank you for your purchase! Your order will be delivered by ${formattedDate}.`;

    // Optionally clear the form
    form.reset();
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const shopNowButton = document.querySelector('.banner button');
  const categoriesSection = document.querySelector('.categories');

  shopNowButton.addEventListener('click', function () {
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
  });
});



  function handleSearch() {
    const input = document.getElementById('searchInput').value.trim();
    if (input) {
      alert("You searched for: " + input); // Replace this with actual search logic
    } else {
      alert("Please enter something to search.");
    }
  }

  
  function handleSearch() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");
    let found = false;

    products.forEach(product => {
      const name = product.getAttribute("data-name").toLowerCase();
      if (name.includes(input)) {
        product.style.display = "block";
        found = true;
      } else {
        product.style.display = "none";
      }
    });

    // Optional: show alert if nothing matches
    if (!found) {
      alert("No products found for: " + input);
    }
  }

  

  function searchProduct() {
    const input = document.getElementById("searchInput").value.toLowerCase();

    // Keywords matched to redirect pages
    const keywordMap = {
      "rtx 3050": "processors.html",
      "i5": "processors.html",
      "i7": "processors.html",
      "ryzen": "processors.html",
      "graphic card": "graphiccards.html",
      "rtx": "graphiccards.html",
      "rx": "graphiccards.html",
      "motherboard": "motherboards.html",
      "ssd": "storagedevices.html",
      "hdd": "storagedevices.html",
      "memory": "memory.html",
      "ram": "memory.html"
    };

    // Check if the input contains any keyword from the map
    for (let keyword in keywordMap) {
      if (input.includes(keyword)) {
        window.location.href = keywordMap[keyword];
        return;
      }
    }

    alert("No matching category page found.");
  }





