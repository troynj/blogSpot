const router = require("express").Router();
const withAuth = require("../../utils/auth")
// const sequelize = require("../../config/connection")
const { Blog, Comment, User } = require("../../models");

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

// router.get("/:id", async (req, res) => {
//   try {
//     const blogData = await Blog.findByPk(req.params.id, {
//       include: [
//         { model: User },
//         { model: Comment, include: [{ model: User }] },
//       ]
//     });

//     if (!blogData) {
//       res.status(404).json({ message: "No blogs found with this id!" });
//       return;
//     }

//     res.status(200).json(blogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.create(req.body);
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No blogs found with this id!" });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
