# Ukseurodollar - A Straightforward Monetary Solicitation Interface

A humorous single-page experiment asking for $1 in 6 different languages with 3 payment options.

## Features

- 6 Languages: English, Français, 日本語, Español, हिंदी, Norsk
- 3 Payment Methods: Apple Pay, Google Pay, PayPal
- Dark monospace theme
- Fully responsive (desktop and mobile)
- Simple static HTML/CSS/JS

## Setup

1. Open `index.html` in any browser to view locally
2. To deploy, upload all files to any static hosting (Netlify, Vercel, GitHub Pages, etc.)

## Connecting to Revolut

To connect this to your Revolut account:

### Option 1: Revolut Payment Links
1. Go to your Revolut Business account
2. Create a payment link for $1.00 USD
3. Update the `handlePayment()` function in `script.js` to redirect to your Revolut payment link

### Option 2: Revolut Merchant API
1. Sign up for Revolut Merchant API
2. Get your API credentials
3. Implement the Revolut payment widget in `script.js`
4. Documentation: https://developer.revolut.com/docs/merchant-api

### Option 3: Third-party Integration (Easiest)
1. Use Stripe or PayPal that connects to your Revolut account
2. Add their payment buttons instead of the current placeholders
3. Funds will transfer to your linked Revolut account

## Files

- `index.html` - Main page structure
- `styles.css` - All styling (dark theme, responsive layout)
- `script.js` - Payment handling logic (needs Revolut integration)

## Deployment

### Quick Deploy to Netlify:
```bash
# If you have Netlify CLI
netlify deploy --dir=. --prod
```

### Or drag and drop all 3 files to:
- Netlify Drop: https://app.netlify.com/drop
- Vercel: https://vercel.com/new
- Cloudflare Pages: https://pages.cloudflare.com/

## License

This is a humorous experiment. Use at your own discretion.
