const router = require('express').Router();
const blog = require('./blog');
const comment = require('./comment');
const user = require('./user');

router.use('/blog', blog);
router.use('/comment', comment);
router.use('/user', user);

module.exports = router;
