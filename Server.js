const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const propertyRoutes = require("./routes/properties");
const wishlistRoutes = require("./routes/wishlist");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/wishlist", wishlistRoutes);

// server
const PORT = 3006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
