# 📦 Order Tracker App

A modern, full-featured order tracking application built with React and React Router. Track your orders in real-time with a beautiful, responsive interface.

## ✨ Features

- **User Authentication**: Complete signup and login system with validation
- **Dashboard**: View all your orders at a glance with statistics
- **Order Tracking**: Real-time order status tracking with visual timeline
- **Order Filtering**: Filter orders by status (All, Pending, Processing, Shipped, Delivered)
- **Detailed Order View**: See complete order details including items, shipping address, and tracking number
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Local Storage**: Persists user data and orders across sessions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd order-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 How to Use

### 1. Create an Account
- Click "Sign Up" in the navigation bar
- Fill in your name, email, and password
- Click "Sign Up" to create your account

### 2. Login
- If you already have an account, click "Login"
- Enter your email and password
- Click "Login" to access your dashboard

### 3. View Your Orders
- After logging in, you'll see your Dashboard
- View order statistics at the top
- See all your orders below
- Filter orders by status using the filter buttons

### 4. Track an Order
- Click "Track Order" on any order card
- Or use the "Track Order" link in the navigation
- Enter your Order ID to see detailed tracking information
- View the visual timeline showing order progress

## 🏗️ Project Structure

```
order-tracker/
│
├── public/
│   └── index.html          # HTML template
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar component
│   │   ├── ProtectedRoute.jsx   # Route protection component
│   │   ├── LoginForm.jsx        # Login form component
│   │   ├── SignupForm.jsx       # Signup form component
│   │   ├── OrderStatus.jsx      # Order status timeline
│   │   └── OrderCard.jsx        # Individual order card
│   │
│   ├── pages/
│   │   ├── Login.jsx       # Login page
│   │   ├── Signup.jsx      # Signup page
│   │   ├── Dashboard.jsx   # Main dashboard
│   │   └── TrackOrder.jsx  # Order tracking page
│   │
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   ├── main.jsx            # App entry point
│   └── routes.jsx          # Route configuration
│
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Features in Detail

### Dashboard
- **Order Statistics**: View total orders, processing, shipped, and delivered counts
- **Order List**: See all your orders with complete details
- **Filtering**: Filter orders by status
- **Quick Actions**: Track any order with one click

### Order Tracking
- **Visual Timeline**: See order progress with an interactive timeline
- **Detailed Information**: View items, shipping address, and tracking number
- **Status Updates**: See recent tracking updates for shipped orders
- **Estimated Delivery**: Get delivery estimates based on order status

### Order Statuses
- **Pending** 📝: Order has been placed and is awaiting processing
- **Processing** ⚙️: Order is being prepared for shipment
- **Shipped** 🚚: Order is on its way to you
- **Delivered** ✅: Order has been successfully delivered

## 🔐 Data Storage

This app uses localStorage to store:
- User accounts and credentials
- Order information
- Authentication status

**Note**: This is a demo application. In a production environment, you should use proper backend authentication and database storage.

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **React Router v6**: Client-side routing
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with flexbox and grid
- **LocalStorage API**: Client-side data persistence

## 📦 Sample Data

The app creates sample orders automatically when you first sign up, including:
- Orders with different statuses
- Multiple items per order
- Tracking numbers
- Shipping addresses

## 🎯 Future Enhancements

- Backend integration with real API
- Email notifications for order updates
- Order history and analytics
- Multiple shipping addresses
- Payment integration
- Admin panel for order management

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 💡 Tips

- Use the filter buttons to quickly find orders by status
- Click on any order card to see detailed tracking information
- The visual timeline shows your order's journey from placement to delivery
- All data is stored locally in your browser

---

Built with ❤️ using React and modern web technologies
