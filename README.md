# MERN Stack Learning Platform

A full-stack learning platform built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User authentication (register, login, logout)
- Course management (create, view, enroll)
- User profiles
- Dashboard with analytics
- Portfolio showcase
- Calendar for scheduling

## Tech Stack

### Frontend
- React.js with Vite
- Context API for state management
- Tailwind CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication

## Project Structure

```
├── public/              # Static files
├── server/              # Backend code
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Mongoose models
│   └── routes/          # API routes
└── src/                 # Frontend code
    ├── auth/            # Authentication components
    ├── context/         # React Context providers
    ├── courses/         # Course-related components
    ├── dashboard/       # Dashboard components
    ├── home/            # Home page components
    ├── landing-page/    # Landing page components
    ├── portfolio/       # Portfolio components
    └── profile/         # User profile components
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-learning-platform
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRE=30d
   NODE_ENV=development
   ```

### Running the Application

#### Development Mode

Run both frontend and backend concurrently:
```
npm run dev:full
```

Or run them separately:

Backend only:
```
npm run dev:server
```

Frontend only:
```
npm run dev
```

#### Production Mode

Build the frontend:
```
npm run build
```

Start the server:
```
npm run server
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/updatedetails` - Update user details
- `PUT /api/auth/updatepassword` - Update user password

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get single user (admin only)
- `POST /api/users` - Create user (admin only)
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)
- `GET /api/users/profile/:id` - Get user profile

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create new course (instructor/admin only)
- `PUT /api/courses/:id` - Update course (instructor/admin only)
- `DELETE /api/courses/:id` - Delete course (instructor/admin only)
- `POST /api/courses/:id/enroll` - Enroll in a course
- `POST /api/courses/:id/ratings` - Rate a course
