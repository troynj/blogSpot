const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');

router.get('/', async (req, res) => {
  try{
    const commentData = await Blog.findAll();
    const comments = commentData.map((blog) => blog.get({ plain: true }));

    res.status(200).json(comments);
    console.log()
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const commentData = await Blog.findByPk(req.params.id, {
      include: [{ model: User}]
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comments found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const commentData = await Blog.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Blog.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comments found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;