const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
router.use('/music', commentRoutes);
router.use('/food', commentRoutes);
router.use('/outdoors', commentRoutes);
router.use('/random', commentRoutes);


module.exports = router;