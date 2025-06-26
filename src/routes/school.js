const express = require('express');
const School = require('../modals/school');

const router = express.Router();

router.get('/', async(req, res) => {
  const data = await School.find();
  res.json({
   data: data,
    message: "School data retrieved successfully"
  })
});

module.exports = router;