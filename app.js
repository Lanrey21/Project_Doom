document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('plus-btn') || event.target.classList.contains('minus-btn')) {
            updateQuantity(event.target);
        } else if (event.target.classList.contains('delete-btn')) {
            deleteItem(event.target);
        } else if (event.target.classList.contains('like-btn')) {
            toggleLike(event.target);
        }
        updateTotalPrice();
    });

    function updateQuantity(button) {
        const cartItem = button.closest('.cart-item');
        const quantityElement = cartItem.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        const price = parseInt(cartItem.getAttribute('data-price'));

        if (button.classList.contains('plus-btn')) {
            quantity++;
        } else if (button.classList.contains('minus-btn') && quantity > 1) {
            quantity--;
        }

        quantityElement.textContent = quantity;
        cartItem.querySelector('.item-price').textContent = `$${quantity * price}`;
    }

    function deleteItem(button) {
        const cartItem = button.closest('.cart-item');
        cartItems.removeChild(cartItem);
    }

    function toggleLike(button) {
        button.classList.toggle('liked');
    }

    function updateTotalPrice() {
        let totalPrice = 0;
        const cartItemElements = cartItems.querySelectorAll('.cart-item');
        cartItemElements.forEach(item => {
            const price = parseInt(item.querySelector('.item-price').textContent.slice(1));
            totalPrice += price;
        });
        totalPriceElement.textContent = totalPrice;
    }
});
