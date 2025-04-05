const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/todoRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/todos', routes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
