const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

const AUTH_SERVICE_URL = `http://localhost:3000/api/auth`;
const PRODUCT_SERVICE_URL = `http://localhost:4000/api/products`;

// Auth Routes
router.post('/register', async (req, res) => {
    try {
        const response = await axios.post(`${AUTH_SERVICE_URL}/register`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            res.status(error.response.status).json(error.response.data);
        } else {
            // The request was made but no response was received or some other error occurred
            console.error('Error:', error.message);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

router.post('/login', async (req, res) => {
    try {
        const response = await axios.post(`${AUTH_SERVICE_URL}/login`, req.body);
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error('Error:', error.message);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

// Product Routes
router.post('/products', async (req, res) => {
    try {
        const response = await axios.post(PRODUCT_SERVICE_URL, req.body, {
            headers: { Authorization: req.headers['authorization'] },
        });
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error('Error:', error.message);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

// Add more product routes as needed

module.exports = router;
