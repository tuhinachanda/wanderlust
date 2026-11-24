# 🧭 Wanderlust - Homestay & Vacation Rental Web Application

Wanderlust is a production-ready, full-stack homestay booking web application inspired by Airbnb, built using **Node.js**, **Express.js**, **MongoDB (Mongoose)**, and server-side rendered **EJS** templates styled with **Bootstrap 5.3**.

---

## 🌟 Key Features

- **Model-View-Controller (MVC) Architecture:** Strict separation of concerns across models, views, controllers, and routes.
- **Dynamic Property Listings:** Full RESTful CRUD operations (Create, Read, Update, Delete) with image previews, category filters, and location/country search.
- **Interactive Homestay Categories:** Filter stays by Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms, Arctic, Beach, and Boats.
- **Client-Side Tax Display Switch:** Toggle prices between base rates and total with 18% GST calculation.
- **Trip Reservations & Bookings:** Dynamic booking widget calculating nights, cleaning fees, and taxes in real-time, plus a dedicated "My Trips" dashboard to track or cancel reservations.
- **Review & Rating System:** Star ratings with interactive forms and cascading deletion (deleting a listing automatically deletes all its reviews via Mongoose middleware).
- **Authentication & Authorization:** Secure user registration, login, and session persistence via `passport`, `passport-local`, and `connect-mongo`.
- **Role-Based Access Control:** Only listing owners can edit/delete their listings, and only review authors can delete their reviews.
- **Schema Validation & Error Handling:** Comprehensive Joi server-side schema validations, Bootstrap client-side form validation, and centralized error handling with custom `ExpressError` and friendly error pages.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose ODM
- **Authentication:** Passport.js, Passport-Local, Passport-Local-Mongoose
- **Session Management:** Express-Session, Connect-Mongo (MongoDB Session Store)
- **Templating Engine:** EJS, EJS-Mate layouts
- **Validation:** Joi (Server-side schema validation) & HTML5 / Bootstrap 5 (Client-side)
- **Styling & UI:** Bootstrap 5.3, Font Awesome 6, Google Fonts (Plus Jakarta Sans), Custom CSS

---

## 📂 Project Structure

```text
homestay-booking/
├── controllers/
│   ├── bookings.js
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/
│   ├── data.js         # 12 realistic homestay listings with Unsplash photos
│   └── index.js        # Seed script
├── models/
│   ├── booking.js      # Booking schema
│   ├── listing.js      # Listing schema with post findOneAndDelete hook
│   ├── review.js       # Review schema
│   └── user.js         # User schema with Passport-Local-Mongoose
├── public/
│   ├── css/
│   │   └── style.css   # Custom minimalist Airbnb-inspired stylesheet
│   └── js/
│       └── script.js   # Bootstrap validation, tax switch, booking calc
├── routes/
│   ├── booking.js      # /bookings routes
│   ├── listing.js      # /listings routes
│   ├── review.js       # /listings/:id/reviews routes
│   └── user.js         # /signup, /login, /logout routes
├── utils/
│   ├── ExpressError.js # Custom error class
│   └── wrapAsync.js    # Async error handling wrapper
├── views/
│   ├── bookings/
│   │   └── index.ejs   # "My Trips" dashboard
│   ├── includes/
│   │   ├── flash.ejs   # Flash alert messages
│   │   ├── footer.ejs  # Footer partial
│   │   └── navbar.ejs  # Sticky navbar with search & user menu
│   ├── layouts/
│   │   └── boilerplate.ejs # Main layout boilerplate
│   ├── listings/
│   │   ├── edit.ejs    # Edit listing form
│   │   ├── index.ejs   # Explore page with categories & card grid
│   │   ├── new.ejs     # Create new listing form
│   │   └── show.ejs    # Detailed property view & booking widget
│   ├── users/
│   │   ├── login.ejs   # Log in view
│   │   └── signup.ejs  # Sign up view
│   └── error.ejs       # Error display page
├── .env                # Environment variables (ignored by Git)
├── .gitignore
├── app.js              # Express application entrypoint
├── middleware.js       # Authentication, authorization & validation middleware
├── package.json
└── schema.js           # Joi validation schemas
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** running locally on port 27017 or a **MongoDB Atlas** connection string

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```env
PORT=8080
ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust
SECRET=wanderlustdevsecret
NODE_ENV=development
```

### 4. Seed the Database
Seed 12 realistic homestays with verified Unsplash images:
```bash
npm run seed
```

### 5. Start the Application
```bash
npm start
```
Visit `http://localhost:8080` in your browser.

---

## ☁️ Deployment Guide (Render & MongoDB Atlas)

1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas) and get your connection string:
   `mongodb+srv://<username>:<password>@cluster0.mongodb.net/wanderlust?retryWrites=true&w=majority`
2. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Wanderlust full-stack homestay booking app"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
3. In [Render](https://render.com), create a new **Web Service**:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:**
     - `NODE_ENV`: `production`
     - `ATLASDB_URL`: `<your-mongodb-atlas-url>`
     - `SECRET`: `<your-production-secret-key>`
