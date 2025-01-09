# Short-URL - URL Shortener Service
![Screenshot 2025-01-09 205158](https://github.com/user-attachments/assets/26a55415-e19b-4e90-a2a5-c2c5d43faae1)
![Screenshot 2025-01-09 205829](https://github.com/user-attachments/assets/1ce3343a-5118-4dff-aa7f-db6b5397ea8d)
![Screenshot 2025-01-09 205731](https://github.com/user-attachments/assets/ade59f6f-f5cf-4ca0-93ed-efb6a1a47e59)
![Screenshot 2025-01-09 205750](https://github.com/user-attachments/assets/1f0e5627-d662-42af-a59d-afea90fae5ff)


A modern, full-stack URL shortener service built with Node.js, Express, MongoDB, and EJS templating engine. This application allows users to create shortened versions of long URLs and track their usage statistics.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **User Authentication**: Secure signup and login system
- **User Dashboard**: Personal dashboard to manage shortened URLs
- **Click Tracking**: Track the number of clicks on each shortened URL
- **Responsive Design**: Beautiful UI that works across all devices
- **Real-time Statistics**: View click statistics for your shortened URLs

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **View Engine**: EJS
- **Authentication**: JWT with Cookie-based sessions
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with Glassmorphism design

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (Node Package Manager)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/short-url.git
   cd short-url
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   PORT=8001
   MONGODB_URI=mongodb://localhost:27017/short-Url
   JWT_SECRET=your_jwt_secret_here
   ```

4. **Start MongoDB**
   ```bash
   mongod
   ```

5. **Run the application**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:8001`

## 📁 Project Structure

```
short-url/
│
├── public/
│   ├── assets/
│   │   └── images/
│   └── styles/
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   ├── logout.ejs
│   ├── signup.ejs
│   └── urls.ejs
│
├── routes/
│   ├── url.route.js
│   ├── user.route.js
│   └── staticRouter.js
│
├── models/
│   ├── url.model.js
│   └── user.model.js
│
├── middleware/
│   └── auth.middleware.js
│
├── controllers/
│   ├── url.controller.js
│   └── user.controller.js
│
├── util/
│   └── auth.js
│
├── .env
├── index.js
├── connection.js
├── .gitignore
├── package.json
└── README.md
```

## 🔐 API Endpoints

### Authentication Routes
- `POST /user/signup`: Register a new user
- `POST /user/login`: Login user
- `GET /auth/logout`: Logout user

### URL Routes
- `POST /url`: Create a new short URL
- `GET /url/my-urls`: Get all URLs for logged-in user
- `GET /:shortId`: Redirect to original URL

## 🔒 Security Features

- Password hashing
- JWT-based authentication
- HTTP-only cookies
- XSS protection
- CSRF protection
- Rate limiting on API endpoints

## 📱 User Interface

The application features a modern, responsive interface with:
- Clean and intuitive design
- Glassmorphism effects
- Responsive navigation
- Mobile-friendly layout
- Real-time feedback on actions
- Error handling with user-friendly messages

## 🚦 Usage

1. **Creating a Short URL**
   - Log in to your account
   - Paste your long URL in the input field
   - Click "Shorten URL"
   - Copy and share your shortened URL

2. **Viewing Statistics**
   - Navigate to "My URLs"
   - View click count and creation date for each URL
   - Track usage patterns over time

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 👨‍💻 Author

Your Name
- GitHub: [@yourusername](https://github.com/sahilsky-ai)


## 🙏 Acknowledgments

- Express.js Documentation
- MongoDB Documentation
- EJS Documentation
- Node.js Community

## 📞 Support

For support, email your@email.com or create an issue in the repository.
