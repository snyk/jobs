const express = require('express');
const fs = require('fs');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {

  const markdownContent = fs.readFileSync('./README.md', { encoding: 'utf8' });

  res.render('index', {
    title: 'NPM Exercise',
    content: markdownContent,
  });
});

module.exports = router;
