// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 10, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 20, image: "product2.jpg" },
    { id: 3, name: "Product 3", price: 30, image: "product3.jpg" },
  ];
  
  const itemsContainer = document.getElementById("items-container");
  const cartItems = document.getElementById("cart-items");
  const checkoutBtn = document.getElementById("checkout-btn");
  
  // Display products
  function displayProducts() {
    itemsContainer.innerHTML = "";
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
        <div class="product-image">
          <img src="images/${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
      itemsContainer.appendChild(productElement);
    });
  }
  
  // Add product to cart
  function addToCart(productId) {
    const selectedProduct = products.find((product) => product.id === productId);
    const cartItem = document.createElement("li");
    cartItem.textContent = `${selectedProduct.name} - $${selectedProduct.price}`;
    cartItems.appendChild(cartItem);
  }
  
  // Checkout
  checkoutBtn.addEventListener("click", () => {
    const total = Array.from(cartItems.children).reduce((acc, item) => {
      const price = parseFloat(item.textContent.match(/\d+/)[0]);
      return acc + price;
    }, 0);
    alert(`Total: $${total.toFixed(2)}`);
  });
  
  // Display products initially
  displayProducts();
  