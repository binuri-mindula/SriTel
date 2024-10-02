const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

// Activate service
router.post('/activate', async (req, res) => {
  const { userId, serviceName } = req.body;
  try {
    const service = new Service({ userId, serviceName, status: 'Active' });
    await service.save();
    res.json({ message: 'Service activated successfully', service });
  } catch (error) {
    res.status(500).json({ message: 'Error activating service', error });
  }
});

// Deactivate service
router.post('/deactivate', async (req, res) => {
  const { userId, serviceName } = req.body;
  try {
    await Service.findOneAndUpdate({ userId, serviceName }, { status: 'Inactive' });
    res.json({ message: 'Service deactivated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deactivating service', error });
  }
});

module.exports = router;
