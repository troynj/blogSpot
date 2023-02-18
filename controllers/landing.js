const router = require("express").Router();
const { Blog, Comment, User } = require("../models");
const withAuth = require("../utils/auth")

router.get("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        { model: User },
        // { model: Comment, include: [{ model: User }] },
      ]
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('landing', {blogs, loggedIn : req.session.loggedIn, userId : req.session.userId});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router