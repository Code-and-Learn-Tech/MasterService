const express = require('express');

const router = express.Router();

 const data = [
    { id: 1, name: 'Asian' },
    { id: 2, name: 'African' },
    { id: 3, name: 'Caucasian' },
    { id: 4, name: 'Hispanic/Latino' },
    { id: 5, name: 'Middle Eastern' },
    { id: 6, name: 'Pacific Islander' },
    { id: 7, name: 'Indigenous/Aboriginal' },
    { id: 8, name: 'Multiracial' }
 ]

router.get('/', (req, res) => {
  res.json({
   data: data,
    message: "Ethnicity data retrieved successfully"
  })
});

module.exports = router;