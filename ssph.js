document.addEventListener("DOMContentLoaded", function() {
    function incrementValue(e) {
        e.preventDefault();
        const inputGroup = e.target.closest('.input-group-cart');
        const inputField = inputGroup.querySelector('input[name="quantity"]');
        let currentValue = parseInt(inputField.value, 10);
        
        if (!isNaN(currentValue)) {
            inputField.value = currentValue + 1;
        } else {
            inputField.value = 1;
        }

        updateTotal(inputGroup.closest('.cart-item'));
        updateEstimatedTotal();
    }

    function decrementValue(e) {
        e.preventDefault();
        const inputGroup = e.target.closest('.input-group-cart');
        const inputField = inputGroup.querySelector('input[name="quantity"]');
        let currentValue = parseInt(inputField.value, 10);
        
        if (!isNaN(currentValue) && currentValue > 1) {
            inputField.value = currentValue - 1;
        }

        updateTotal(inputGroup.closest('.cart-item'));
        updateEstimatedTotal();
    }

    function updateTotal(cartItem) {
        const priceElement = cartItem.querySelector('.cart-product-price');
        const totalElement = cartItem.querySelector('.cart-product-total');
        const quantityInput = cartItem.querySelector('.quantity-field-cart');

        const price = parseFloat(priceElement.innerText.replace('₱', '').replace(',', '').trim());
        const quantity = parseInt(quantityInput.value, 10);

        const total = price * quantity;

        totalElement.innerText = '₱' + total.toFixed(2);
    }

    function updateEstimatedTotal() {
        const cartItems = document.querySelectorAll('.cart-item');
        let estimatedTotal = 0; 

        cartItems.forEach(function(cartItem) {
            const totalElement = cartItem.querySelector('.cart-product-total');
            const totalPrice = parseFloat(totalElement.innerText.replace('₱', '').replace(',', '').trim());

            estimatedTotal += totalPrice; 
        });

        const formattedTotal = estimatedTotal.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2});

        const estimatedTotalElement = document.querySelector('.estimated-total');
        estimatedTotalElement.innerText = 'ESTIMATED TOTAL: ₱' + formattedTotal;
    }

    var inputGroups = document.querySelectorAll('.input-group-cart');
    inputGroups.forEach(function(inputGroup) {
        inputGroup.querySelector('.button-plus-cart').addEventListener('click', incrementValue);
        inputGroup.querySelector('.button-minus-cart').addEventListener('click', decrementValue);
    });

    updateEstimatedTotal(); 

});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navItems = document.querySelector('.nav-items');

hamburgerMenu.addEventListener('click', function (event) {
    event.stopPropagation();
    hamburgerMenu.classList.toggle('active');
    navItems.classList.toggle('active');
});

navItems.addEventListener('click', function (event) {
    event.stopPropagation(); 
});

document.addEventListener('click', function (event) {
    if (!navItems.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        hamburgerMenu.classList.remove('active');
        navItems.classList.remove('active');
    }
});

window.onload = function() {
    document.getElementById("videoModal").style.display = "block";
}

function closeModal() {
    document.getElementById("videoModal").style.display = "none";
}

