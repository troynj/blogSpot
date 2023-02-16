const router = require("express").Router();

router.get("/", (req, res) => {
if(logged_in)
    res.render('SignUp');

});

module.exports = router
