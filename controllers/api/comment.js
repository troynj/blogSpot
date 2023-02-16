const router = require('express').Router();
const withAuth = require("../../utils/auth")
const { Blog, Comment, User } = require('../../models');
// router.get('/', async (req, res) => {
//   try{
//     const commentData = await Comment.findAll();
//     const comments = commentData.map((Comment) => Comment.get({ plain: true }));

//     res.status(200).json(comments);
//     console.log()
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

// router.get('/:id', async (req, res) => {
//   try {
//     const commentData = await Comment.findByPk(req.params.id, {
//       includes: [{ model: User }]
//     });

//     if (!commentData) {
//       res.status(404).json({ message: 'No comments found with this id!' });
//       return;
//     }

//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create(req.body);
    console.log("comment data from client")
    console.log(commentData)
    res.status(200).json(commentData);
    console.log(commentData)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
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