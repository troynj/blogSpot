const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  console.log("feedback")
  console.log(req.body)
  console.log(req.body.password)
  try {
    const newUser = await User.create(req.body);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = newUser.id
      console.log("req.session: ", req.session)
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.put('/', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect name or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect name or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;