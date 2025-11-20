// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    const themeBtn = document.getElementById('themeBtn');
    
    if (newTheme === 'light') {
        html.setAttribute('data-theme', 'light');
        themeBtn.textContent = '☀️';
    } else {
        html.removeAttribute('data-theme');
        themeBtn.textContent = '🌙';
    }
    
    // Save preference
    localStorage.setItem('theme', newTheme);
}

// Payment handler function
function handlePayment(paymentMethod) {
    console.log(`Payment initiated with: ${paymentMethod}`);
    
    // This is where you'll integrate with Revolut
    // For now, it's a placeholder
    
    switch(paymentMethod) {
        case 'apple-pay':
            alert('Apple Pay integration - Connect to Revolut');
            // Add your Revolut Apple Pay integration here
            break;
            
        case 'google-pay':
            alert('Google Pay integration - Connect to Revolut');
            // Add your Revolut Google Pay integration here
            break;
            
        case 'paypal':
            alert('PayPal integration - Connect to Revolut');
            // Add your Revolut PayPal integration here
            break;
            
        default:
            console.error('Unknown payment method');
    }
}

// Optional: Add some fun interaction effects
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    const themeBtn = document.getElementById('themeBtn');
    
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeBtn.textContent = '☀️';
    }

    // Payment box click effect
    const paymentBoxes = document.querySelectorAll('.payment-box');
    
    paymentBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const currentBg = getComputedStyle(document.documentElement).getPropertyValue('--hover-bg');
            box.style.backgroundColor = currentBg;
            setTimeout(() => {
                box.style.backgroundColor = '';
            }, 200);
        });
    });
});
