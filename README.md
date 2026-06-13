# React E‑commerce App

A fully functional e‑commerce frontend built with React. Users can add items to a cart, adjust quantities, view an order summary (subtotal, tax, shipping, total), fill in checkout details, and place an order – receiving a confirmation with an order ID.

## Features

- **Add to Cart** – Click the “Add to Cart” button on any product; the cart icon instantly updates with the item count.
- **Cart Page** – View all added items, increase/decrease quantity, or remove items completely.
- **Order Summary** – Automatically calculates:
  - Subtotal
  - Tax (e.g., 10%)
  - Shipping fee (flat rate or dynamic)
  - **Total** amount
- **Proceed to Checkout** – A clean form to collect customer details (name, address, payment info).
- **Place Order** – After submitting the form, the app displays:
  - A success message
  - A unique **Order ID** (simulated)
- **Persistent Cart** – Cart data is stored in `localStorage` (if implemented), so items survive page refresh.
- **Responsive Design** – Works on desktop, tablet, and mobile.

## Technologies Used

- **React** (with Hooks: `useState`, `useContext`, `useEffect`)
- **React Context API** – for global cart state
- **CSS3** (or CSS Modules / Tailwind – adjust as needed)
- **Git** & **GitHub** for version control


