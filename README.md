# CozyNest Server

Backend API server for CozyNest - A comprehensive roommate finder platform that connects individuals seeking compatible living arrangements.

## 🌐 Live API URL
**Production Server:** [https://cozy-nest-server.vercel.app/](https://cozy-nest-server.vercel.app/)

## 🚀 Key Features

• **RESTful API Architecture** - Clean, organized endpoints following REST principles
• **MongoDB Integration** - Efficient database operations with proper indexing
• **CORS Configuration** - Secure cross-origin resource sharing setup
• **Environment Security** - Protected sensitive credentials and API keys
• **Error Handling** - Comprehensive error responses and validation
• **Scalable Structure** - Modular codebase for easy maintenance and expansion

## 🛠️ Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** Firebase Admin SDK integration
- **Deployment:** Vercel
- **Environment:** dotenv for configuration management

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB database (local or cloud)
- Firebase project credentials

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/code-shams/cozyNest-server-A10PH.git
   cd cozyNest-server-A10PH
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   DB_USER=your_mongodb_username
   DB_PASS=your_mongodb_password
   DB_NAME=cozyNest
   PORT=3000
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000`

## 🔗 API Endpoints

### **Roommate Listings**

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `GET` | `/post` | Get all roommate listings | Public |
| `GET` | `/post?availability=Available` | Get featured available listings | Public |
| `GET` | `/post/:id` | Get specific listing details | Public |
| `POST` | `/post` | Create new roommate listing | Private |
| `PUT` | `/post/:id` | Update existing listing | Private |
| `DELETE` | `/post/:id` | Delete roommate listing | Private |

### **User Operations**

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `GET` | `/roommates/user/?name=userName&email=userEmail` | Get user's listings | Private |
| `PATCH` | `/roommates/:id` | Like/unlike a listing | Private |

### **Utility Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check endpoint |

## 📊 Database Schema

### **Roommate Listing Document**
```javascript
{
  title: String,            // Listing title
  location: String,         // Property location
  rentAmount: Number,       // Monthly rent
  roomType: String,         // Single/Shared/Studio
  preferences: Array,       // Smoking, Pets, etc.
  description: String,      // Detailed description
  contactInfo: String,      // Contact number
  availability: String,     // Available/Not Available
  email: String,            // Owner's email
  name: String,             // Owner's name
  photo: String,            // Owner's profile photo
  likeCount: Number,        // Number of likes
}
```

## 🔒 Security Features

- **CORS Policy:** Configured for specific origins
- **Environment Variables:** Sensitive data protection
- **Error Handling:** Secure error responses

## 🌍 Deployment

The server is deployed on **Vercel** with the following configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.js"
    }
  ]
}
```

## 📁 Project Structure

```
cozyNest-server/
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
├── vercel.json           # Deployment configuration
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Scripts

```json
{
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"No tests specified\" && exit 0"
}
```

## 🐛 Common Issues & Solutions

**Issue:** Database connection fails
- **Solution:** Check MongoDB credentials in `.env` file

**Issue:** CORS errors in browser
- **Solution:** Verify the client URL is added to CORS configuration

**Issue:** 404 errors on Vercel
- **Solution:** Ensure `vercel.json` is properly configured

## 📞 Support

For support, please contact:
- **Developer:** Code Shams
- **Repository:** [GitHub](https://github.com/code-shams/cozyNest-server-A10PH)
- **Client Repository:** [CozyNest Client](https://github.com/code-shams/cozyNest-client-A10PH)


**Built with passion by code-shams**