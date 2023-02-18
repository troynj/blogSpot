const router = require('express').Router();
const blog = require('./blog');
const comment = require('./comment');
const auth = require('./auth');
const logout = require('./logout');

router.use('/blog', blog);
router.use('/comment', comment);
router.use('/auth', auth);
router.use('/logout', logout);

module.exports = router;
