# Nisal Tours

Welcome to Nisal Tours! This is a comprehensive tour management application that allows users to browse, book, and review tours. The application also provides administrative functionalities for managing tours, users, and bookings.


## Table of Contents

- [Features](#features)
- [Technogies Used](#techologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Contributions](#contributions)
- [Developer](#developer)
- [Live Demo](#live-demo)

## Features

- **User Authentication**: Sign up, log in, and log out functionality with email verification and password reset options.
- **Tour Management**: Browse all tours, view detailed tour information, and book tours.
- **User Profile Management**: Update personal details, view booking history, and manage reviews.
- **Admin Panel**: Manage tours, users, and bookings. View analytics and reports.
- **Responsive Design**: The application is fully responsive and works seamlessly on all devices.
- **Payment Integration**: Secure payment processing with Stripe.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Stripe
- Pug (for templating)
- CSS (with media queries for responsiveness)


## Installation


1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/nisal-tours.git
    cd nisal-tours
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following environment variables:

    ```sh
    NODE_ENV=development
    PORT=3000
    DATABASE=mongodb://localhost:27017/nisal-tours
    DATABASE_PASSWORD=your-database-password
    JWT_SECRET=your-jwt-secret
    JWT_EXPIRES_IN=90d
    JWT_COOKIE_EXPIRES_IN=90
    EMAIL_USERNAME=your-email-username
    EMAIL_PASSWORD=your-email-password
    EMAIL_HOST=your-email-host
    EMAIL_PORT=your-email-port
    STRIPE_SECRET_KEY=your-stripe-secret-key
    STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
    ```

4. Run the application:

    ```sh
    npm run start
    ```

## Usage

- **Sign Up/Login**: Users can sign up or log in to access their account.
- **Browse Tours**: View all available tours and detailed information about each tour.
- **Book Tours**: Book tours directly from the tour details page.
- **User Profile**: Update profile information, view booking history, and manage reviews.
- **Admin Panel**: Accessible to administrators for managing tours, users, and bookings.

## Scripts

- **start**: Starts the application in development mode using Nodemon.
- **start:prod**: Starts the application in production mode.
- **debug**: Starts the application in debug mode using ndb.
- **watch:js**: Watches JavaScript files and recompiles them using Parcel.
- **build:js**: Builds JavaScript files for production using Parcel.

```json
"scripts": {
  "start": "nodemon server.js",
  "start:prod": "NODE_ENV=production nodemon server.js",
  "debug": "ndb server.js",
  "watch:js": "parcel watch ./public/js/index.js --out-dir ./public/js --out-file bundle.js",
  "build:js": "parcel watch ./public/js/index.js --out-dir ./public/js --out-file bundle.js"
}
```

## API Endpoints

### Users:

- **POST** `/api/v1/users/signup`: Sign up a new user.
- **POST** `/api/v1/users/login`: Log in a user.
- **POST** `/api/v1/users/forgotPassword`: Send password reset email.
- **PATCH** `/api/v1/users/resetPassword/:token`: Reset password.

### Tours:

- **GET** `/api/v1/tours`: Get all tours.
- **GET** `/api/v1/tours/:id`: Get a single tour by ID.
- **POST** `/api/v1/tours`: Create a new tour (Admin).
- **PATCH** `/api/v1/tours/:id`: Update a tour by ID (Admin).
- **DELETE** `/api/v1/tours/:id`: Delete a tour by ID (Admin).

### Bookings:

- **GET** `/api/v1/bookings`: Get all bookings (Admin).
- **GET** `/api/v1/bookings/:id`: Get a single booking by ID.
- **POST** `/api/v1/bookings`: Create a new booking.
- **PATCH** `/api/v1/bookings/:id`: Update a booking by ID (Admin).
- **DELETE** `/api/v1/bookings/:id`: Delete a booking by ID (Admin).


## Contributions

Contributions to the Nisal Tours project are welcome. If you have any ideas, suggestions, or improvements, feel free to submit a pull request or open an issue on the project's repository.

## Live Demo

Check out the live demo of the Nisal Tours: [Nisal Tours](https://nisal-tours.vercel.app/)

## Developer

This project is developed by Mohammad Armaan, a passionate web developer with expertise in full-stack technologies and a keen interest in creating user-friendly and interactive web applications. You can learn more about him and his work on his [Mohammad Armaan](https://mohammadarmaan.netlify.app/).

---

Enjoy exploring great heights Nisal Tours!