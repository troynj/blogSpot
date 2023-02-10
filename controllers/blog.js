const router = require("express").Router();
const { Blog, Comment, User } = require("../models");

// router.get("/", async (req, res) => {
//   try {
//     const blogData = await Blog.findAll({
//       include: [
//         { model: User },
//         { model: Comment, include: [{ model: User }] },
//       ]
//     });
//     const blogs = blogData.map((blog) => blog.get({ plain: true }));

//     res.render('blog', {blogs});
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        { model: User },
        { model: Comment, include: [{ model: User}] },
      ]
    });

    if (!blogData) {
      res.status(404).json({ message: "No blogs found with this id!" });
      return;
    }
    const data = blogData.get({ plain: true });
    console.log("tester log")
console.log(data)
    res.status(200).render('blog', data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router