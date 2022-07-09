const router = require('express').Router();
const { Post, User, Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  console.log('=========================');
  await Post.findAll({
    attributes: ['id',
      'title',
      'content',
      'createdAt'
    ],
    order: [
      ['createdAt', 'DESC']
    ],
    include: [{
      model: User,
      attributes: ['username']
    },
    {
      model: Comment,
      attributes: ['id', 'comment_text', 'postId', 'user_id', 'createdAt'],
      include: {
        model: User,
        attributes: ['username']
      }
    }]
  })
  .then(postData => res.json(postData.reverse()))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', withAuth, async (req, res) => {
  await Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id',
      'title',
      'content',
      'createdAt'
    ],
    order: [
      ['createdAt', 'DESC']
    ],
    include: [{
      model: User,
      attributes: ['username']
    },
    {
      model: Comment,
      attributes: ['id', 'comment_text', 'postId', 'user_id', 'createdAt'],
      include: {
        model: User,
        attributes: ['username']
      }
    }]
  })
  .then(postData => {
    if (!postData) {
      res.status(404).json({ Message: 'Post with this ID cannot be found' });
      return;
    }
    res.json(postData.reverse())
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ ...body, user_id: req.session.user_id });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
