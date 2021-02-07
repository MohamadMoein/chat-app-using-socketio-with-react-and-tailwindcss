const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('The server is up and running');
// });

router.get('/hello-world', (req, res) => {
  res.json({
    'chatApp': 'Hello World'
  })
});

module.exports = router;