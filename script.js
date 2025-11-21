// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const button = document.querySelector('.dark-mode-toggle');
    button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Payment handler function
function handlePayment() {
    // TODO: Add Stripe Payment Link here
    // For now, show alert
    alert('Payment integration coming soon! This will redirect to Stripe checkout.');
    
    // When Stripe is set up, replace above with:
    // window.location.href = 'YOUR_STRIPE_PAYMENT_LINK_HERE';
}

// Optional: Track button clicks for analytics
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.pay-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Payment button clicked');
        });
    });
});
