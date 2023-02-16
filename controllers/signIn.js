const router = require("express").Router();

router.get("/", (req, res) => {

    req.session.loggedIn ? res.render('landing') :res.render('signIn')

});

module.exports = router
