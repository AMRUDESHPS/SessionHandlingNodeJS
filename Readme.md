
# Node.js Authentication System with Session and Flash Messages

This is a basic authentication system built using **Node.js**, **Express**, **express-session**, **connect-flash**, and **Handlebars** (hbs) for templating. The app demonstrates a simple login, session management, and logout functionality, with flash messages for feedback on failed login attempts.

## Features

- User login system with hardcoded credentials.
- Session management with `express-session`.
- Flash messages to notify users of login success or failure using `connect-flash`.
- Protected routes that can only be accessed after login.
- Logout functionality that destroys the session.
- Handlebars (`hbs`) as the templating engine.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v12.x or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Installation

1. Clone the repository or download the source code:
   ```bash
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the Node.js server:
   ```bash
   node server.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

### Login Credentials

- **Username**: `AMRUDESH PS`
- **Password**: `asd123`

### Available Routes

1. **Login Page** (`GET /`): Displays the login form.
   - Enter the username and password.
   - If login fails, a flash message will display an error.
   - If login succeeds, you will be redirected to the home page.

2. **Home Page** (`GET /home`): Displays the protected home page.
   - You must be logged in to view this page.
   - If you try to access this page without logging in, an unauthorized message will be shown.

3. **Submit Login** (`POST /submit`): Handles the login form submission.
   - If credentials match, the user session is created, and the user is redirected to the home page.
   - If credentials don't match, a flash message is shown, and the user is redirected back to the login page.

4. **Logout** (`GET /logout`): Logs out the user by destroying the session.
   - After logout, the user is redirected to the login page.


