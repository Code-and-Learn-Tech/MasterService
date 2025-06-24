const express = require('express');

const router = express.Router();

 const data = [
    { id: 1, name: 'Harvard University' },
    { id: 2, name: 'Stanford University' },
    { id: 3, name: 'Massachusetts Institute of Technology' },
    { id: 4, name: 'University of California, Berkeley' },
    { id: 5, name: 'University of Oxford' },
    { id: 6, name: 'University of Cambridge' },
    { id: 7, name: 'California Institute of Technology' },
    { id: 8, name: 'Princeton University' },
    { id: 9, name: 'Yale University' },
    { id: 10, name: 'Columbia University' }
 ]

router.get('/', (req, res) => {
  res.json({
   data: data,
    message: "School data retrieved successfully"
  })
});

module.exports = router;