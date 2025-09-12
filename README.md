# Signup Project

A simple web application for user registration and authentication built with Node.js, Express, MySQL, and vanilla JavaScript.

## Features

- User registration with username, email, and password
- Secure password hashing using bcrypt
- User authentication and sign-in
- Clean, responsive UI
- RESTful API endpoints
- Ready for deployment on Render

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **Frontend**: HTML, CSS, JavaScript
- **Security**: bcryptjs for password hashing
- **Deployment**: Render

## Project Structure

```
Signup/
├── server.js          # Main Express server
├── package.json       # Node.js dependencies and scripts
├── database.sql       # MySQL database schema
├── .env              # Environment variables
├── render.yaml       # Render deployment configuration
├── public/           # Static frontend files
│   ├── signup.html   # Registration page
│   ├── signin.html   # Login page
│   ├── welcome.html  # Welcome page after login
│   ├── styles.css    # CSS styling
│   └── script.js     # Client-side JavaScript
└── README.md         # This file
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm or yarn

### Local Development

1. **Clone or download the project files**

2. **Install dependencies:**
   ```bash
   cd Signup
   npm install
   ```

3. **Set up MySQL database:**
   - Create a MySQL database named `signup_db`
   - Run the SQL script in `database.sql` to create the users table

4. **Configure environment variables:**
   - Update the `.env` file with your MySQL credentials:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=signup_db
   PORT=3000
   ```

5. **Start the server:**
   ```bash
   npm start
   ```

6. **Open your browser and navigate to:**
   - Sign up: `http://localhost:3000/signup.html`
   - Sign in: `http://localhost:3000/signin.html`

### Deployment on Render

1. **Create a Render account** at https://render.com

2. **Create a MySQL database** on Render or another cloud provider

3. **Deploy the web service:**
   - Connect your GitHub repository to Render
   - Use the `render.yaml` configuration file
   - Set environment variables in Render dashboard:
     - `DB_HOST`: Your database host
     - `DB_USER`: Your database username
     - `DB_PASSWORD`: Your database password
     - `DB_NAME`: Your database name
     - `PORT`: 10000 (Render's default)

4. **Update the database connection** in your Render MySQL instance

## API Endpoints

- `POST /api/signup` - Register a new user
  - Body: `{ "username": "string", "email": "string", "password": "string" }`
  - Response: Success message or error

- `POST /api/signin` - Authenticate user
  - Body: `{ "email": "string", "password": "string" }`
  - Response: User data or error

- `GET /` - Serve static files (HTML, CSS, JS)

## Security Features

- Passwords are hashed using bcrypt with salt rounds
- Input validation on both client and server side
- CORS enabled for cross-origin requests
- Environment variables for sensitive configuration

## Usage

1. **Sign Up**: Fill out the registration form with username, email, and password
2. **Sign In**: Use your email and password to log in
3. **Welcome**: After successful login, you'll see the welcome page
4. **Logout**: Click the logout button to end your session

## Development Notes

- The application uses localStorage for session management (in production, consider using JWT or secure cookies)
- Error handling is implemented for both client and server side
- The UI is responsive and works on mobile devices
- Static files are served from the `/public` directory

## Troubleshooting

- **Database connection issues**: Check your `.env` file and ensure MySQL is running
- **Port conflicts**: Change the PORT in `.env` if 3000 is already in use
- **CORS errors**: Ensure the frontend is served from the same origin or configure CORS properly
- **bcrypt errors**: Make sure bcryptjs is properly installed

## License

This project is open source and available under the ISC License.