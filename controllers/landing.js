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

    res.render('landing', {blogs, logged_in : req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router