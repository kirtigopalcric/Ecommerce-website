// public/app.js
document.addEventListener('DOMContentLoaded', function () {
    const products = [
      // Your product data here
    ];
  
    const cart = [];
  
    const productListing = document.getElementById('productListing');
    const cartItemsContainer = document.getElementById('cartItems');
    const checkoutButton = document.getElementById('checkoutButton');
  
    // Render product listing
    products.forEach(product => {
      const productElement = createProductElement(product);
      productListing.appendChild(productElement);
    });
  
    // Event delegation for "Add to Cart" buttons
    productListing.addEventListener('click', function (event) {
      if (event.target.classList.contains('addToCart')) {
        const productId = event.target.dataset.productId;
        const selectedProduct = products.find(product => product.id === parseInt(productId));
        addToCart(selectedProduct);
      }
    });
  
    // Handle checkout button click
    checkoutButton.addEventListener('click', function () {
      if (cart.length > 0) {
        // In a real scenario, you would integrate with a payment gateway here
        alert('Processing payment. Thank you!');
        clearCart();
      } else {
        alert('Your cart is empty. Add items before checkout.');
      }
    });
  
    // Function to create a product element
    function createProductElement(product) {
      const productElement = document.createElement('div');
      productElement.className = 'pro';
      productElement.innerHTML = `
        <img src="${product.image}" alt="">
        <div class="des">
          <span>${product.brand}</span>
          <h5>${product.name}</h5>
          <div class="star">
            ${getStarIcons()}
          </div>
          <h4>&#8377 ${product.price}</h4>
        </div>
        <button class="addToCart" data-product-id="${product.id}">Add to Cart</button>
      `;
      return productElement;
    }
  
    // Function to add a product to the cart
    function addToCart(product) {
      cart.push(product);
      renderCart();
    }
  
    // Function to render the cart
    function renderCart() {
      cartItemsContainer.innerHTML = '';
      cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.textContent = product.name;
        cartItemsContainer.appendChild(cartItem);
      });
    }
  
    // Function to clear the cart
    function clearCart() {
      cart.length = 0;
      renderCart();
    }
  
    // Function to get star icons
    function getStarIcons() {
      return Array(5).fill('<i class="fas fa-star"></i>').join('');
    }
  });
  
// Sample product data
/*const products = [
    { id: 1, name: 'Adiddas Cotton Shirt', description: 'Pure cotton shirt', price: 999, image: 'img/products/f1.jpg' },
    // Add more products as needed
  ];

  // Load cart items from localStorage or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('productContainer');
    const viewCartBtn = document.getElementById('viewCartBtn');
    const cartContainer = document.getElementById('cartContainer');
    const cartList = document.getElementById('cartList');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Function to render products dynamically
    function renderProducts() {
      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'pro';
        productElement.innerHTML = `
          <img src="${product.image}" alt="">
          <div class="des">
            <span>${product.name}</span>
            <h5>${product.description}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>&#8377 ${product.price}</h4>
          </div>
          <button class="addToCart" data-product="${JSON.stringify(product)}">Add to Cart</button>
          <a href="#" ><i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
        `;

        productElement.querySelector('.addToCart').addEventListener('click', function () {
          const productData = JSON.parse(this.getAttribute('data-product'));
          addToCart(productData);
          alert(`Added ${productData.name} to the cart!`);
        });

        productContainer.appendChild(productElement);
      });
    }

    // Function to add items to the cart
    function addToCart(item) {
      cartItems.push(item);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // Function to render cart items
    function renderCart() {
      cartList.innerHTML = '';
      cartItems.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.textContent = `${item.name} - ${item.price}`;
        cartList.appendChild(cartItemElement);
      });
    }

    // Show/hide cart container
    viewCartBtn.addEventListener('click', function () {
      cartContainer.style.display = 'block';
      renderCart();
    });

    // Checkout button logic (for demo, just clear the cart)
    checkoutBtn.addEventListener('click', function () {
      alert('Checkout completed!');
      cartItems.length = 0;
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      cartContainer.style.display = 'none';
      renderCart();
    });

    // Initial product rendering
    renderProducts();
  });*/
  