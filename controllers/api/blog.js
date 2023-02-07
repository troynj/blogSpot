const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');

router.get('/', async (req, res) => {
  try{
    const blogData = await Blog.findAll();
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.status(200).json(blogs);
    console.log()
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User, through: Comment}]
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blogs found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create(req.body);
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blogs found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;