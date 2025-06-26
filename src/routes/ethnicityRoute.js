const express = require('express');
const Ethnicity = require('../modals/ethnicity');

const router = express.Router();


router.get('/', async(req, res) => {
  const data =  await Ethnicity.find();
  res.json({
   data: data,
    message: "Ethnicity data retrieved successfully"
  })
});

module.exports = router;