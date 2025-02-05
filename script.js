// Shopping Cart Logic
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const id = product.getAttribute('data-id');
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        cart.push({ id, name, price });
        cartCount++;
        cartTotal += price;

        updateCart();
    });
});

// Update Cart
function updateCart() {
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
}

// Open Cart Modal
document.getElementById('cart-icon').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cart-modal').style.display = 'flex';
});

// Close Cart Modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    e.target.reset();
});