const router = require('express').Router();
const landing = require('./landing');
const dashboard = require('./dashboard');
const blog = require('./blog');
const api = require('./api');
const login = require('./login')

router.use('/', landing);
router.use("/user", dashboard)
router.use("/blog", blog)
router.use("/api", api)
router.use("/auth", login)

module.exports = router;
