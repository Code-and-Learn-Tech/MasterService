const express = require('express');
const Caste = require('../modals/caste');

const router = express.Router();


router.get('/', async(req, res) => {
const data = await Caste.find();
  res.json({
   data: data,
    message: "Caste data retrieved successfully"
  })
});

module.exports = router;