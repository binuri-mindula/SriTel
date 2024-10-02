require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const billingRoutes = require('./routes/billingRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/billing', billingRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Billing service running on port ${PORT}`));
