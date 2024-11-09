# AI Integration Web Application 🤖
This is a full-stack web application that integrates AI features, including sentiment analysis and content recommendation. The app has both a user-facing interface and an admin dashboard. It is built with React.js on the frontend and Node.js with Express.js on the backend, with MongoDB for database management. User security is handled with JWT (JSON Web Tokens) and bcryptjs for password hashing.

## Project Overview
This web application provides a platform where users can:
- Perform sentiment analysis on text input.
- Get personalized content recommendations based on user preferences.
- View and manage their profile, including their profile picture and email.
- Admin users can manage other users, including deleting users and creating new admin users.

The application uses role-based access control, where only admin users can access the admin dashboard, while normal users can only interact with their profiles, sentiment analysis, and content recommendations.

Visit the live version here: [AI Integration Web Application](https://your-deployed-app-url)

## Features
- **Sentiment Analysis**: Users can input text to analyze its sentiment (positive, negative, or neutral).
- **Content Recommendation**: Personalized content recommendations based on the user's preferences.
- **User Profile**: Users can view and update their profile, including their name, email, and profile picture.
- **Admin Dashboard**: Admin users can manage users, including viewing user profiles, deleting users, and creating new admins.
- **Create Admin Section**: Admins can create new admin users in addition to normal users.
- **Role-Based Access**: Admins can access the Admin Dashboard and manage users, while regular users can only access their profile, sentiment analysis, and content recommendations.
- **User Authentication**: Registration, login, and password reset functionality.
  
## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **User Authentication & Security**: JSON Web Tokens (JWT) for authentication, bcryptjs for password hashing
- **AI Features**: Sentiment analysis and content recommendation algorithms

## Installation & Setup

### Clone the Repository:

To clone the project, use the following command:
git clone https://github.com/SIBSANKARMANNA/AI-application.git

## License
This project is open source and available under the MIT License. See the LICENSE file for more details.
