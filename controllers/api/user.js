const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');

router.get('/', async (req, res) => {
  try{
    const userData = await User.findAll();
    const users = userData.map((User) => User.get({ plain: true }));

    res.status(200).json(users);
    console.log()
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Blog},{model: Comment}]
    });

    if (!userData) {
      res.status(404).json({ message: 'No users found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!userData) {
      res.status(404).json({ message: 'No users found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;