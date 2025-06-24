const express = require('express');

const router = express.Router();

 const data = [
    { id: 1, name: 'Brahmin' },
    { id: 2, name: 'Kshatriya' },
    { id: 3, name: 'Vaishya' },
    { id: 4, name: 'Shudra' }
 ]

router.get('/', (req, res) => {
  res.json({
   data: data,
    message: "Caste data retrieved successfully"
  })
});

module.exports = router;