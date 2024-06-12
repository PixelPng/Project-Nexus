const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tech-company', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/contact', require('./routes/contact'));

app.listen(port, () => console.log(`Server running on port ${port}`));
