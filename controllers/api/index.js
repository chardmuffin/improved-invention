const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogpostRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', blogpostRoutes);
router.use('/comments', commentRoutes);


module.exports = router;