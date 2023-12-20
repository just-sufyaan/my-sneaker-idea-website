// Fuction to update the date and time to display.
function updateTime() {
  const dateTimeElement = document.getElementById("date-time");
  const currentDate = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateString = currentDate.toLocaleDateString("en-US", options);
  const timeString = currentDate.toLocaleTimeString("en-US");
  const dateTimeString = `${dateString}<br>${timeString}`;
  dateTimeElement.innerHTML = dateTimeString;
}

setInterval(updateTime, 1000);

// Adding Event Listeners for handling the dropdown menus.
document.addEventListener("DOMContentLoaded", function () {
  const aboutUsLink = document.querySelector('a[href="About Us.html"]');
  const aboutUsDropdown = document.querySelector(
    "li:nth-of-type(2) > ul.dropdown-content"
  );
  const homepageLink = document.querySelector('a[href="index.html"]');
  const homepageDropdown = document.querySelector(
    "li:nth-of-type(1) > ul.dropdown-content"
  );
  const sneakerCollectionsLink = document.querySelector(
    'a[href="Sneaker Collections.html"]'
  );
  const sneakerCollectionsDropdown = document.querySelector(
    "li:nth-of-type(3) > ul.dropdown-content"
  );
  const fashionTrendsLink = document.querySelector(
    'a[href="Fashion Trends and Styles.html"]'
  );
  const fashionTrendsDropdown = document.querySelector(
    "li:nth-of-type(4) > ul.dropdown-content"
  );
  const contactUsLink = document.querySelector('a[href="Contact Us.html"]');
  const contactUsDropdown = document.querySelector(
    "li:nth-of-type(5) > ul.dropdown-content"
  );

  // Fuction to handle how the dropdown menu works.
  function handleDropdown(link, dropdown) {
    if (link && dropdown) {
      let isDropdownHovered = false;

      dropdown.querySelectorAll("a").forEach((dropdownLink) => {
        dropdownLink.addEventListener("click", (event) => {
          event.stopPropagation();

          let targetId = dropdownLink.getAttribute("href");
          if (targetId.startsWith("#")) {
            targetId = targetId.slice(1);
          }

          let targetElement = document.querySelector(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }

          dropdown.style.display = "none";
        });
      });

      link.addEventListener("mouseover", () => {
        dropdown.style.display = "block";
      });

      link.addEventListener("mouseout", () => {
        if (!isDropdownHovered) {
          dropdown.style.display = "none";
        }
      });

      dropdown.addEventListener("mouseover", () => {
        isDropdownHovered = true;
        dropdown.style.display = "block";
      });

      dropdown.addEventListener("mouseout", () => {
        isDropdownHovered = false;
        dropdown.style.display = "none";
      });

      dropdown.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", (event) => {
          event.stopPropagation();
        });
      });
    }
  }

  // Initialising the dropdowns for each naviagation link.
  handleDropdown(aboutUsLink, aboutUsDropdown);
  handleDropdown(homepageLink, homepageDropdown);
  handleDropdown(sneakerCollectionsLink, sneakerCollectionsDropdown);
  handleDropdown(fashionTrendsLink, fashionTrendsDropdown);
  handleDropdown(contactUsLink, contactUsDropdown);
});

// Sets the initial values so that user knows what format to fill the fields in with.
document.addEventListener("DOMContentLoaded", function () {
  var initialValues = {
    fname: "Sufyaan",
    lname: "Cassim",
    email: "sufyaancassim12345@gmail.com",
    "shoe-size": "8",
    message: "Type your message or recommendation here",
  };

  Object.keys(initialValues).forEach(function (key) {
    var element = document.getElementById(key);
    element.value = initialValues[key];
    element.addEventListener("focus", function () {
      if (this.value === initialValues[key]) {
        this.value = "";
      }
    });
  });
});

// Checks to see if any of the fields are emtpy and if so alerts the user to fill them in before submission.
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var favsneaker = document.querySelector('input[name="favsneaker"]:checked');

  if (
    fname === "" ||
    lname === "" ||
    email === "" ||
    message === "" ||
    !favsneaker
  ) {
    alert("Please fill out all the fields!!");
    return;
  }
  // Alerts the user that thier form was submitted successfully.
  alert("Form submitted successfully!");

  // Clears all the values in the form after the user has submitted.
  document.getElementById("myForm").reset();
});

// Function to navigate to the Shopping Cart page.
function navigateToCart() {
  window.location.href = "Shopping Cart.html";
}

// Function to return to the homepage.
function navigateBack() {
  window.location.href = "index.html";
}

// Fuction for managing and displaying items to the cart.
function displayCartItems() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartItemsDiv = document.getElementById("cart-items");
  let totalPrice = 0;

  cartItems.forEach((item) => {
    cartItemsDiv.innerHTML += `<div>${item.name} - R${item.price}</div>`;
    totalPrice += item.price;
  });

  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.innerText = `R${totalPrice.toFixed(2)}`;
}

// Fuction to update the cart count.
function updateCartCount(count) {
  document.getElementById("cart-count").innerText = count;
}

// Fuction to add an item to the shopping cart.
function addToCart(itemName, price) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push({ name: itemName, price: price });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  updateCartCount(cartItems.length);
}

// Function to remove all items from the cart.
function clearCart() {
  localStorage.removeItem("cartItems");
}

// Function to clear the cart items and update the display.
function clearCartItems() {
  localStorage.removeItem("cartItems");
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("total-price").innerText = "R0.00";
}
