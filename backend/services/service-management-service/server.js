require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/services', serviceRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Service management running on port ${PORT}`));
