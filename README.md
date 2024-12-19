# Ecommerce-shop

A modern, feature-rich e-commerce web application built with Angular and Node.js, designed to provide an intuitive shopping experience for users and a robust platform for sellers.

## 🚀 Features

- **User Authentication**: Secure login and registration using JWT authentication.
- **Product Management**: Add, edit, and delete products with detailed information and images.
- **Cart Functionality**: Add products to the cart and proceed to checkout.
- **Search Products**: Search for products.
- **Lazy Loading**: Improved performance with lazy-loaded modules.
- **RESTful API**: Backed by a robust API built with Node.js and Express.
- **Database**: MongoDB for reliable data storage.

---

## 🛠️ Tech Stack

- **Frontend**: Angular, RxJS, HTML, CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS
- **Tools**: VSCode, Postman, Git

---

## 🏗️ Project Structure

```plaintext
src/
├── app/
│   ├── core/           # Core services, guards, interceptors
│   ├── features/       # Feature modules (Home, Products, Cart, etc.)
│   ├── shared/         # Shared components (Loader, Navbar, Footer)
│   ├── app-routing.module.ts # Centralized routing
│   └── app.component.ts      # Root component
├── assets/             # Static assets
└── environments/       # Environment-specific configurations
