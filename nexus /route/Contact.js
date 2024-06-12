const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Handle contact form submission
router.post('/', async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.status(201).send(newContact);
});

module.exports = router;
