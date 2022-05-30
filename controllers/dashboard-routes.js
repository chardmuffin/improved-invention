const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // store the results of the db query in a variable called postData. should use something that "finds all" from the Post model. may need a where clause!
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
    },
    attributes: [
        'id',
        'title',
        'content',
        'createdAt'
    ],
    include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'postId', 'user_id', 'createdAt'],
            include: {
                model: User,
                attributes: ['username']
            }

            const post = dbPostData.get({ plain: true });
            res.render('edit-post', { post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
router.get('/new', (req, res) => {
    res.render('new-post');
});



module.exports = router;