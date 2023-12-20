const express = require('express');
const router = express.Router();
const axios = require('axios');
const Item = require('../models/Item');

router.get('/initialize', async(req, res) => {
  try {
    const seedData = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');

    await Item.insertMany(seedData);

    res.status(200).json({ message: 'Database initialized with seed data' });
  } catch (error) {
    console.error('Error initializing database:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;


