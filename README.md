# 🛒 PERN E-Commerce Platform

A modern full-stack e-commerce application for discovering products, managing carts and orders, completing secure payments, and connecting with customer support in real time.

![Application preview](/frontend/public/screenshot-for-readme.png)

## Features

- Product browsing, cart management, and order tracking
- Admin dashboard for managing products
- Clerk authentication
- Polar payment integration
- PostgreSQL database hosted on Neon
- Real-time customer support chat with Stream
- Stream video calling, typing indicators, reactions, threads, file uploads, and GIFs
- Image uploads and optimization with ImageKit
- Webhook support
- Sentry monitoring, error tracking, and performance tracking
- Structured application logs

## Tech Stack

### Frontend

- React
- TanStack Query
- Tailwind CSS
- DaisyUI

### Backend

- Node.js
- Express.js
- TypeScript
- PostgreSQL

## Getting Started

1. Clone the repository and install dependencies for the frontend and backend.
2. Create the required environment files using the variables below.
3. Start the backend server.
4. Start the frontend development server.

The frontend runs from `/frontend` and communicates with the backend through `VITE_API_URL`.

## Frontend Environment Variables

### Frontend (`/frontend`)

```bash
VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
VITE_SENTRY_DSN=<your_sentry_dsn>
VITE_API_URL=<your_backend_api_url>
```

Never commit real credentials or secret keys to the repository.