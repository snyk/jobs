const express = require('express');
const depTree = require('../../fixtures/depTree.fixture');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('dependencies', {
    title: 'Snyk Dependency Tree Exercise',
    depTree,
  });
});

module.exports = router;
