
const style = document.createElement('style');
style.innerHTML = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        width: 100%;
        background-color: white;
    }
    .header .logo {
        font-size: 50px;
        font-weight: bold;
        padding: 20px;
        background-color: #F5F5FF;
        color: #5243C2;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header nav {
        display: flex;
        align-items: center;
        margin-right: 20px;
    }
    .header nav a {
        margin: 0 50px;
        text-decoration: line;
        color: #333;
        font-weight: bold;
        margin-left: 1px;
        cursor: pointer;
    }
    .header .contact {
        display: flex;
        align-items: center;
        margin-right: 50px;
    }
    .header .contact a {
        color: #ff6b6b;
        text-decoration-line: underline;
        text-decoration-style: double;
        margin-right: 50px;
        margin-left: 300px;
    }
    .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px;
        width: 100%;
    }
    .main .text {
        max-width: 200px;
    }
    .main .text h1 {
        font-size: 60px;
        margin-bottom: 20px;
    }
         .main .burger {
        position: relative;
        max-width: 500px;
        
    }
    .main .burger img {
        max-width: 100%;
        margin-left: -100px;
    }
    .main .sandwich {
        position: relative;
        width: 450px; /* Set the width of the sandwich */
        height: auto;
        margin: 0 auto;
      margin-bottom: -20px;
    }
    .main .sandwich img {
        width: 60%; /* Ensure the sandwich base fills the container */
    }
    .main .make-burger-logo {
        position: absolute;
        bottom: -6px;
        left: -90px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #5243C2;
        color: white;
        border-radius: 60%;
        width: 100px;
        height: 100px;
        font-size: 24px;
        font-weight: bold;
        padding: 30px;
    }
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    }
    .footer .payment-methods {
        display: flex;
        align-items: center;
    }
    .footer .payment-methods img {
        margin: 0 5px;
    }
     .ingredients {
        display: flex;
        justify-content: space-between;
        align-items:center
        width: 100%;
        padding: 20px;
    }
    .ingredient {
        text-align: center;
  
    
   
    margin: 10px; /* Provide some spacing around each ingredient */
}
      
    
    .ingredient img {
    max-width: 50%;  
}
    .summary {
        text-align: right;
        margin-left: 20px;
    }
    .summary p {
        font-size: 24px;
        margin: 0;
    }
    .summary .price {
        font-size: 32px;
        color: #4CAF50;
    }
      .summary .details {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
    .summary .detail {
        display: flex;
        align-items: center;
        margin-right: 20px; /* Add some margin between the detail items */
    }
    .summary .detail img {
        margin-right: 5px;
        width: 24px;
        height: 24px;
    }
      .summary button {
        background-color: #5243C2; /* Purple background color */
        color: white; /* White text color */
        border: none;
        border-radius: 20px; /* Rounded corners */
        padding: 15px 30px; /* Padding for size */
        font-size: 16px; /* Font size for the text */
        cursor: pointer;
        margin-top: 20px;
    }
    .summary button:hover {
        background-color: #3f3a96; /* Slightly darker purple on hover */
    }

    .ingredient-on-sandwich {
        position: absolute;
        left:5%;
        transform: translate(-50%, 0);
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        opacity: 0;
        
    }
    @keyframes slideIn {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    .ingredient-animation {
        animation: slideIn 2s ease-out forwards;
    }
        .checkout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    width: 100%;
    background-color: white;
}

.checkout-header {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
}

.checkout-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
    max-width: 600px;
}

.checkout-form div {
    display: flex;
    flex-direction: column;
}

.checkout-form label {
    font-weight: bold;
    margin-bottom: 5px;
}

.checkout-form input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.checkout-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
}

.checkout-buttons button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.checkout-buttons .cancel {
    background-color: #ccc;
    color: white;
}

.checkout-buttons .confirm {
    background-color: #5243C2;
    color: white;
}

      

      
`;
document.head.appendChild(style);
function loadHomePage() {
    // Clear the current content
    document.body.innerHTML = '';

    // Create the main container
    const container = document.createElement('div');
    container.className = 'container';

    // Create header section
    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = `
        <div class="logo">a</div>
        <nav>
            <a href="#" id="discover-link">Discover</a>
            <a href="#" id="make-your-burger-link">Make Your Burger</a>
        </nav>
        <div class="contact">
            <a href="#">Call Me Back</a>
            <span>8 800 437-87-22</span>
            <img src="avatar.png" alt="User Icon" />
        </div>
    `;
    container.appendChild(header);

    // Add event listener to the "Make Your Burger" link
    const makeYourBurgerLink = header.querySelector('#make-your-burger-link');
    makeYourBurgerLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        loadMakeYourBurgerPage();
    });
    const main = document.createElement('div');
    main.className = 'main';
    main.innerHTML = `
        <div class="text">
            <h1>Make Your Burger</h1>
        </div>
        <div class="burger">
            <img src="main-img (1).png" alt="Sandwich Base Image" />
            <div class="make-burger-logo">MAKE BURGER</div>
        </div>
    `;
    container.appendChild(main);

    const footer = document.createElement('div');
    footer.className = 'footer';
    footer.innerHTML = `
        <p>2022. Make Your Burger | <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
        <div class="payment-methods">
            <img src="visa.png" alt="Visa" />
            <img src="master card.png" alt="MasterCard" />
            <img src="google.png" alt="Google Pay" />
            <img src="pp.png" alt="PayPal" />
            <img src="Etherium.png" alt="Ethereum" />
            <img src="b.png" alt="Bitcoin" />
            <img src="pay.png" alt="Apple Pay" />
        </div>
    `;
    container.appendChild(footer);

    // Append the container to the body
    document.body.appendChild(container);
}

// Function to load the "Make Your Burger" page
function loadMakeYourBurgerPage() {
  document.body.innerHTML = ''; // Clear the current content

  // Ingredient prices and paths
  const ingredients = {
      cutlet: { price: 1.5, path: 'images/cutlet.png', calories: 200, time: 1, weight: 3 },
      mayo: { price: 0.5, path: 'images/mayo.png', calories: 100, time: 0.5, weight: 1 },
      onion: { price: 0.3, path: 'images/onion.png', calories: 10, time: 0.2, weight: 0.5 },
      tomato: { price: 0.4, path: 'images/tomato.png', calories: 20, time: 0.3, weight: 0.5 },
      cucumber: { price: 0.3, path: 'images/cucumber.png', calories: 5, time: 0.2, weight: 0.5 },
      cheese: { price: 0.7, path: 'images/cheese.png', calories: 80, time: 0.5, weight: 1 },
      salad: { price: 0.5, path: 'images/salad.png', calories: 15, time: 0.2, weight: 0.3 },
      bun: { price: 1.0, path: 'images/bun.png', calories: 150, time: 1, weight: 2 }
  };

  // Create the main container for the new page
  const newContainer = document.createElement('div');
  newContainer.className = 'container';

  // Create the header for the new page
  const newHeader = document.createElement('div');
  newHeader.className = 'header';
  newHeader.innerHTML = `
      <div class="logo">a</div>
      <nav>
          <a href="#" id="discover-link">Discover</a>
          <a href="#">Make Your Burger</a>
      </nav>
      <div class="contact">
          <a href="#">Call Me Back</a>
          <span>8 800 437-87-22</span>
          <img src="avatar.png" alt="User Icon" />
      </div>
  `;
  newContainer.appendChild(newHeader);

  // Add event listener to the "Discover" link
  const discoverLink = newHeader.querySelector('#discover-link');
  discoverLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior
      loadHomePage();
  });

  // Create the main section for the new page
  const newMain = document.createElement('div');
  newMain.className = 'main';
  newMain.innerHTML = `
      <div class="text">
          <h1>Make Your Burger</h1>
      </div>
      <div class="sandwich">
          <img src="images/rghef.png" alt="Sandwich Base Image" id="sandwich-image"/>
      </div>
      <div class="summary">
          <p>Summary</p>
          <p class="price" id="price">$0.00</p>
          <button>Checkout</button>
          <div class="summary-details">
              <img src="time.png" alt="Time Icon" id="time-icon">
              <span id="time">0 min</span>
              <img src="oz.png" alt="Weight Icon" id="weight-icon">
              <span id="weight">0 oz</span>
              <img src="calories.png" alt="Calories Icon" id="calories-icon">
              <span id="calories">0 kcal</span>
          </div>
      </div>
  `;
  newContainer.appendChild(newMain);

  // Create the ingredients section for the new page
  const ingredientsSection = document.createElement('div');
  ingredientsSection.className = 'ingredients';

  // Helper function to create ingredient elements
  function createIngredientElement(name, data) {
      const ingredientDiv = document.createElement('div');
      ingredientDiv.className = 'ingredient';
      ingredientDiv.innerHTML = `
          <img src="${data.path}" alt="${name}" />
          <p>${name.charAt(0).toUpperCase() + name.slice(1)}</p>
          <div class="ls">
              <button class="decrease">-</button>
              <span class="quantity" id="${name}-quantity">0</span>
              <button class="increase">+</button>
          </div>
      `;
      return ingredientDiv;
  }

  // Add ingredients
  Object.keys(ingredients).forEach(ingredient => {
      const element = createIngredientElement(ingredient, ingredients[ingredient]);
      ingredientsSection.appendChild(element);
  });
  newContainer.appendChild(ingredientsSection);

  // Create the footer for the new page
  const newFooter = document.createElement('div');
  newFooter.className = 'footer';
  newFooter.innerHTML = `
      <div class="info">
          <p>2022. Make Your Burger | <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
      </div>
      <div class="payment-methods">
          <img src="visa.png" alt="Visa" />
          <img src="master card.png" alt="MasterCard" />
          <img src="google.png" alt="Google Pay" />
          <img src="pp.png" alt="PayPal" />
          <img src="Etherium.png" alt="Ethereum" />
          <img src="b.png" alt="Bitcoin" />
          <img src="pay.png" alt="Apple Pay" />
      </div>
  `;
  newContainer.appendChild(newFooter);

  // Append the new container to the body
  document.body.appendChild(newContainer);

  // Function to update the price and other details
  function updateSummary() {
      let totalPrice = 0;
      let totalCalories = 0;
      let totalTime = 0;
      let totalWeight = 0;

      Object.keys(ingredients).forEach(ingredient => {
          const quantity = parseInt(document.getElementById(`${ingredient}-quantity`).innerText);
          totalPrice += quantity * ingredients[ingredient].price;
          totalCalories += quantity * ingredients[ingredient].calories;
          totalTime += quantity * ingredients[ingredient].time;
          totalWeight += quantity * ingredients[ingredient].weight;
      });

      document.getElementById('price').innerText = `$${totalPrice.toFixed(2)}`;
      document.getElementById('calories').innerText = `${totalCalories} kcal`;
      document.getElementById('time').innerText = `${totalTime} min`;
      document.getElementById('weight').innerText = `${totalWeight} oz`;
  }

  // Add event listeners to the controls
  Object.keys(ingredients).forEach(ingredient => {
      const decreaseButton = document.querySelector(`#${ingredient}-quantity`).previousElementSibling;
      const increaseButton = document.querySelector(`#${ingredient}-quantity`).nextElementSibling;

      decreaseButton.addEventListener('click', () => {
          const quantityElement = document.getElementById(`${ingredient}-quantity`);
          let quantity = parseInt(quantityElement.innerText);
          if (quantity > 0) {
              quantity--;
              quantityElement.innerText = quantity;
              updateSummary();
              // Remove ingredient animation
              removeIngredientAnimation(ingredient);
          }
      });

      increaseButton.addEventListener('click', () => {
          const quantityElement = document.getElementById(`${ingredient}-quantity`);
          let quantity = parseInt(quantityElement.innerText);
          quantity++;
          quantityElement.innerText = quantity;
          updateSummary();
          
          addIngredientAnimation(ingredient, ingredients[ingredient].path);
      });
  });

  // Function to add ingredient animation
  function addIngredientAnimation(ingredient, path) {
      const sandwichImage = document.getElementById('sandwich-image');
      const ingredientImage = document.createElement('img');
      ingredientImage.src = path;
      ingredientImage.alt = ingredient;
      ingredientImage.className = 'ingredient-on-sandwich ingredient-animation';
      ingredientImage.style.width = '50%'; // Adjust size relative to sandwich base

      // Get the current number of ingredients and reverse the stacking order
      const numIngredients = document.querySelectorAll('.ingredient-on-sandwich').length;
      const initialTopPosition = -40;
      const spacingBetweenIngredients = 18;
      ingredientImage.style.top = `${initialTopPosition - numIngredients * spacingBetweenIngredients}px`;

      sandwichImage.parentNode.appendChild(ingredientImage);

      setTimeout(() => {
          ingredientImage.style.transform = 'translate(-50%, 0) scale(1)';
          ingredientImage.style.opacity = '1';
      }, 10);
  }

  // Function to remove ingredient animation
  function removeIngredientAnimation(ingredient) {
      const sandwichImage = document.getElementById('sandwich-image');
      const ingredientImages = sandwichImage.parentNode.querySelectorAll(`.ingredient-on-sandwich[alt="${ingredient}"]`);

      if (ingredientImages.length > 0) {
          const ingredientImage = ingredientImages[ingredientImages.length - 1];
          ingredientImage.style.transform = 'translate(-50%, -100%) scale(0)';
          ingredientImage.style.opacity = '0';

          setTimeout(() => {
              ingredientImage.remove();
          }, 300);
      }
  }

  // Event listener for the Checkout button
  const checkoutButton = newMain.querySelector('.summary button');
  checkoutButton.addEventListener('click', function () {
      loadCheckoutPage();
  });
}

// Function to load the checkout page
function loadCheckoutPage() {
  document.body.innerHTML = ''; // Clear the current content

  // Create the main container for the checkout page
  const checkoutContainer = document.createElement('div');
  checkoutContainer.className = 'checkout-container';

  // Create the checkout content
  checkoutContainer.innerHTML = `
      <div class="checkout-header">
          <h2>Checkout</h2>
          <button class="close-checkout" id="close-checkout">X</button>
      </div>
      <div class="checkout-form">
          <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name">
          </div>
          <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="Enter your phone number">
          </div>
          <div class="form-group">
              <label for="address">Shipping Address</label>
              <input type="text" id="address" placeholder="Enter your address">
          </div>
          <div class="form-group">
              <label for="delivery-time">Time to Delivery</label>
              <input type="time" id="delivery-time" placeholder="Enter delivery time">
          </div>
      </div>
      <div class="checkout-actions">
          <button class="cancel" id="cancel-checkout">Cancel</button>
          <button class="checkout" id="confirm-checkout">Checkout</button>
      </div>
  `;

  document.body.appendChild(checkoutContainer);


  const closeCheckoutButton = document.getElementById('close-checkout');
  closeCheckoutButton.addEventListener('click', loadMakeYourBurgerPage);

  // Event listener to cancel the checkout and return to the burger page
  const cancelCheckoutButton = document.getElementById('cancel-checkout');
  cancelCheckoutButton.addEventListener('click', loadMakeYourBurgerPage);

  
  const confirmCheckoutButton = document.getElementById('confirm-checkout');
  confirmCheckoutButton.addEventListener('click', function () {
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const address = document.getElementById('address').value.trim();
      const deliveryTime = document.getElementById('delivery-time').value.trim();

      if (!name || !phone || !address || !deliveryTime) {
          alert('Please fill in all required information.');
      } else {
          alert(`Thank you, ${name}, for dealing with our restaurant!`);
          
      }
  });
}




loadHomePage();

