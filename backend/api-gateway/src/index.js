const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Separate routes for auth and products
const apiRoutes = require('./routes/apiRoutes');
app.use('/api/auth', apiRoutes);
app.use('/api/products', apiRoutes);

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
