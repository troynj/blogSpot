const router = require('express').Router();
const blog = require('./blog');
const comment = require('./comment');
const auth = require('./signIn');

router.use('/blog', blog);
router.use('/comment', comment);
router.use('/auth', auth);

module.exports = router;
