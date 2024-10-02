const express = require('express');
const Bill = require('../models/Bill');
const router = express.Router();

// Create a new bill
router.post('/create', async (req, res) => {
  const { billId, userId, amount } = req.body;
  try {
    const bill = new Bill({ billId, userId, amount, status: 'Unpaid' });
    await bill.save();
    res.json({ message: 'Bill created successfully', bill });
  } catch (error) {
    res.status(500).json({ message: 'Error creating bill', error });
  }
});

// Get user's billing history
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const bills = await Bill.find({ userId });
    res.json({ bills });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bills', error });
  }
});

module.exports = router;
