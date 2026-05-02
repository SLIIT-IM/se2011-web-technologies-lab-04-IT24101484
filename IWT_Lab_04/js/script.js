const storeName = "Campus Tech Store";
const year = 2026;
const products = ["Laptop", "Headphones", "Smart Watch", "Mouse"];

console.log(storeName);
console.log(year);

const themeButton = document.getElementById("themeBtn");
const welcomeButton = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");
const productTable = document.getElementById("productTable");
const productCount = document.getElementById("productCount");
const showProductsBtn = document.getElementById("showProductsBtn");
const productListDisplay = document.getElementById("productListDisplay");
const discountButton = document.getElementById("discountBtn");
const priceInput = document.getElementById("priceInput");
const discountResult = document.getElementById("discountResult");
const offersButton = document.getElementById("offersBtn");
const offersMessage = document.getElementById("offersMessage");
const searchButton = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const clock = document.getElementById("clock");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

welcomeButton.addEventListener("click", function () {
    welcomeMessage.textContent = "Welcome to Campus Tech Store! Enjoy student-friendly technology deals.";
});

productCount.textContent = productTable.tBodies[0].rows.length;

showProductsBtn.addEventListener("click", function () {
    productListDisplay.innerHTML = "";

    products.forEach(function (product) {
        const listItem = document.createElement("li");
        listItem.textContent = product;
        productListDisplay.appendChild(listItem);
    });
});

discountButton.addEventListener("click", function () {
    const price = Number(priceInput.value);

    if (price > 0) {
        const discount = price * 0.10;
        const finalPrice = price - discount;
        discountResult.textContent = "Discount: Rs. " + discount.toFixed(2) + " | Final Price: Rs. " + finalPrice.toFixed(2);
    } else {
        discountResult.textContent = "Please enter a valid product price.";
    }
});

offersButton.addEventListener("click", function () {
    offersMessage.textContent = "Special student offer active: Free delivery and selected item discounts are available today.";
});

searchButton.addEventListener("click", function () {
    const userInput = searchInput.value.trim().toLowerCase();
    const found = products.some(function (product) {
        return product.toLowerCase() === userInput;
    });

    if (found) {
        searchResult.textContent = "Product found in the store list.";
    } else {
        searchResult.textContent = "Sorry, this product is not in the current store list.";
    }
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9+\-\s]{10,15}$/;

    if (fullName === "" || email === "" || phone === "" || message === "") {
        formMessage.textContent = "Please fill in all fields before submitting.";
        formMessage.style.color = "red";
    } else if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
    } else if (!phonePattern.test(phone)) {
        formMessage.textContent = "Please enter a valid phone number.";
        formMessage.style.color = "red";
    } else if (message.length < 10) {
        formMessage.textContent = "Message should be at least 10 characters long.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
        contactForm.reset();
    }
});

function updateClock() {
    const now = new Date();
    clock.textContent = "Current Time: " + now.toLocaleTimeString();
}

welcomeMessage.textContent = "Page loaded successfully. Click buttons below to interact with the website.";
setInterval(updateClock, 1000);
updateClock();
