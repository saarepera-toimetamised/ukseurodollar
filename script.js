// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const button = document.querySelector('.dark-mode-toggle');
    button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Payment handler function with analytics tracking
function handlePayment(event) {
    // Get which language box was clicked
    const languageBox = event.target.closest('.payment-box');
    const language = languageBox.querySelector('.language-label').textContent.trim();
    
    // Track the event in Vercel Analytics
    if (window.va) {
        window.va('track', 'Payment Button Click', { language: language });
    }
    
    // Also log to console for debugging
    console.log('Payment button clicked in:', language);
    
    // Show message to user
    alert('Thank you for your interest! 💰\n\nPayment integration coming soon.\n\nButton clicked in: ' + language);
}

// Optional: Track page views
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded and ready for tracking');
});
