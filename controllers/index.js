const router = require('express').Router();
const landing = require('./landing');
const dashboard = require('./dashboard');
const blog = require('./blog');
const api = require('./api');

router.use('/', landing);
router.use("/user", dashboard)
router.use("/user", dashboard)
router.use("/blog", blog)

module.exports = router;
