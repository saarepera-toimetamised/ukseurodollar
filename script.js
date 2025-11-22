// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const button = document.querySelector('.dark-mode-toggle');
    button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Payment handler function with Google Analytics tracking
function handlePayment(event) {
    // Get which language box was clicked
    const languageBox = event.target.closest('.payment-box');
    const language = languageBox.querySelector('.language-label').textContent.trim();
    
    // Track the event in Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'button_click', {
            'event_category': 'Payment',
            'event_label': language,
            'value': 1
        });
    }
    
    // Also log to console for debugging
    console.log('Payment button clicked in:', language);
    
    // Show message to user
    alert('Thank you for your interest! Payment integration coming soon. Button clicked in: ' + language);
}