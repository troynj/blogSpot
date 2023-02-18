const router = require("express").Router();
const { Blog, Comment, User } = require("../models");
const withAuth = require("../utils/auth")

router.get('/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        { model: Blog },
        { model: Comment, include: [{ model: User }]}
      ]    
    });

    if (!userData) {
      res.status(404).json({ message: 'No users found with this id!' });
      return;
    }
    const data = userData.get({ plain: true })
    console.log(data)
    res.status(200).render("dashboard", {data, loggedIn : req.session.loggedIn, userId : req.session.userId});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router