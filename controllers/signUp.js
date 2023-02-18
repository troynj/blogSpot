const router = require("express").Router();

router.get("/", (req, res) => {
if(req.session.loggedIn)
    res.render('SignUp');

});

module.exports = router
