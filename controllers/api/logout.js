const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');

// Logout
router.post('/', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router